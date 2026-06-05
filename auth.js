// ── NutriBase: Google Auth + Firestore Sync ────────────────────────────────
// Runs after app.js is loaded. Requires firebase-config.js.

let fbApp = null, fbAuth = null, fbDb = null, fbUser = null;
let syncTimer = null;

function initFirebase() {
  try {
    if (typeof FIREBASE_CONFIG === 'undefined' || !CLOUD_SYNC_ENABLED) return;
    if (!FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') return;
  } catch(e) { return; }
  try {
    fbApp  = firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    fbDb   = firebase.firestore();

    fbAuth.onAuthStateChanged(user => {
      fbUser = user;
      updateAuthUI(user);
      if (user) loadFromCloud();
    });
  } catch(e) {
    console.error('Firebase init error:', e);
  }
}

// ── UI ────────────────────────────────────────────────────────────────────────

function updateAuthUI(user) {
  const guest  = document.getElementById('sp-guest');
  const spUser = document.getElementById('sp-user');
  const dot    = document.getElementById('sync-dot');
  const tbUser = document.getElementById('topbar-user');
  if (!guest) return;

  if (user) {
    guest.style.display = 'none';
    spUser.style.display = 'block';
    document.getElementById('sp-name').textContent  = user.displayName || 'Аккаунт';
    document.getElementById('sp-email').textContent = user.email || '';
    const avatar   = document.getElementById('sp-avatar');
    const fallback = document.getElementById('sp-avatar-fallback');
    const tbAvatar = document.getElementById('topbar-avatar');
    if (user.photoURL) {
      avatar.src = user.photoURL;
      avatar.style.display = 'block';
      fallback.style.display = 'none';
      if (tbAvatar) { tbAvatar.src = user.photoURL; }
    } else {
      avatar.style.display = 'none';
      fallback.style.display = 'flex';
      fallback.textContent = (user.displayName || 'U')[0].toUpperCase();
    }
    if (tbUser) tbUser.style.display = 'flex';
    if (dot) dot.style.display = 'inline-block';
  } else {
    guest.style.display = 'block';
    spUser.style.display = 'none';
    if (tbUser) tbUser.style.display = 'none';
    if (dot) dot.style.display = 'none';
  }
}

function toggleAuthPanel() {
  if (!fbUser) signIn();
}

// ── AUTH ──────────────────────────────────────────────────────────────────────

function isInAppBrowser() {
  const ua = navigator.userAgent;
  return ua.includes('Telegram') ||
         ua.includes('FBAN') || ua.includes('FBAV') || // Facebook
         ua.includes('Instagram') ||
         ua.includes('VKApp') ||
         (/iPhone|iPad|iPod/.test(ua) && !/Safari\//.test(ua) && !/CriOS/.test(ua)) ||
         (/Android/.test(ua) && /wv/.test(ua));
}

function signIn() {
  if (!fbAuth) {
    toast('Firebase не подключён', 'err');
    return;
  }
  if (isInAppBrowser()) {
    showOpenInBrowserBanner();
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  fbAuth.signInWithPopup(provider)
    .then(() => toast('Вход выполнен ✓', 'ok'))
    .catch(err => {
      console.error('Sign-in error:', err);
      if (err.code === 'auth/popup-blocked') {
        toast('Браузер заблокировал попап — разреши всплывающие окна для сайта', 'err');
      } else if (err.code !== 'auth/popup-closed-by-user') {
        toast('Ошибка: ' + err.code, 'err');
      }
    });
}

function showOpenInBrowserBanner() {
  if (document.getElementById('open-browser-banner')) return;
  const d = document.createElement('div');
  d.id = 'open-browser-banner';
  const url = window.location.href;
  d.innerHTML = `
    <div style="font-size:13px;color:var(--text);margin-bottom:10px;">Google вход не работает в этом браузере. Открой сайт в Safari или Chrome.</div>
    <a href="${url}" target="_blank" rel="noopener"
       style="display:block;text-align:center;background:var(--accent);border-radius:8px;padding:10px;font-weight:700;font-size:13px;color:#111;text-decoration:none;">
      Открыть в браузере
    </a>
    <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:10px;right:12px;background:none;border:none;color:var(--text3);cursor:pointer;font-size:18px;">✕</button>`;
  d.style.cssText = 'position:fixed;bottom:80px;left:14px;right:14px;background:var(--bg2);border:1px solid var(--border2);border-radius:14px;padding:16px;z-index:9999;box-shadow:0 8px 32px rgba(0,0,0,.6);position:fixed;';
  document.body.appendChild(d);
}

function signOut() {
  if (!fbAuth) return;
  fbAuth.signOut().then(() => toast('Вы вышли из аккаунта'));
}

// ── SYNC ──────────────────────────────────────────────────────────────────────

function setSyncStatus(state) { // 'syncing' | 'ok' | 'err'
  const dot = document.getElementById('sync-dot');
  if (!dot) return;
  dot.className = 'sync-dot' + (state !== 'ok' ? ' ' + state : '');
  dot.title = state === 'syncing' ? 'Синхронизация...' : state === 'err' ? 'Ошибка синхронизации' : 'Синхронизировано';
}

function scheduleSync() {
  if (!fbUser || !fbDb) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncToCloud, 3000); // debounce 3s
}

async function syncToCloud() {
  if (!fbUser || !fbDb) return;
  setSyncStatus('syncing');
  try {
    const customProducts = (window.DB || []).filter(d => d.custom);
    const data = {
      weightLog:   window.weightLog   || [],
      diary:       (window.DIARY      || []).slice(-365), // last 365 days
      customDB:    customProducts,
      wpSettings:  JSON.parse(localStorage.getItem('nb_wp')  || '{}'),
      updatedAt:   firebase.firestore.FieldValue.serverTimestamp()
    };
    await fbDb.collection('users').doc(fbUser.uid).set(data, { merge: true });
    setSyncStatus('ok');
  } catch(e) {
    console.error('Sync error:', e);
    setSyncStatus('err');
  }
}

async function loadFromCloud() {
  if (!fbUser || !fbDb) return;
  setSyncStatus('syncing');
  try {
    const snap = await fbDb.collection('users').doc(fbUser.uid).get();
    if (!snap.exists) {
      // First login — push local data to cloud
      await syncToCloud();
      toast('Данные загружены в облако');
      return;
    }
    const data = snap.data();

    // Merge weight log (take union by date)
    if (data.weightLog && data.weightLog.length > 0) {
      const local = window.weightLog || [];
      const merged = [...local];
      data.weightLog.forEach(e => {
        if (!merged.find(l => l.date === e.date)) merged.push(e);
      });
      merged.sort((a,b) => a.date.localeCompare(b.date));
      window.weightLog = merged;
      localStorage.setItem('nb_weight', JSON.stringify(merged));
    }

    // Merge custom products
    if (data.customDB && data.customDB.length > 0) {
      const existing = (window.DB || []).filter(d => d.custom).map(d => d.id);
      data.customDB.forEach(p => {
        if (!existing.includes(p.id)) {
          p.custom = true;
          window.DB.push(p);
        }
      });
      localStorage.setItem('nb_db', JSON.stringify(window.DB));
    }

    // Merge diary
    if (data.diary && data.diary.length > 0) {
      const localDiary = window.DIARY || [];
      const mergedDiary = [...localDiary];
      data.diary.forEach(e => {
        if (!mergedDiary.find(l => l.id === e.id)) mergedDiary.push(e);
      });
      window.DIARY = mergedDiary;
      localStorage.setItem('nb_diary', JSON.stringify(mergedDiary));
    }

    // WP settings
    if (data.wpSettings) {
      const local = JSON.parse(localStorage.getItem('nb_wp') || '{}');
      const merged = { ...data.wpSettings, ...local };
      localStorage.setItem('nb_wp', JSON.stringify(merged));
    }

    setSyncStatus('ok');
    toast('Данные синхронизированы ☁');

    // Re-render current page
    if (typeof renderDB === 'function') renderDB();
    if (typeof renderWeightPage === 'function') loadWpSettings();

  } catch(e) {
    console.error('Load from cloud error:', e);
    setSyncStatus('err');
    toast('Ошибка загрузки данных', 'err');
  }
}

async function syncNow() {
  await syncToCloud();
  toast('Синхронизация завершена ☁');
}

// ── PATCH app.js functions to trigger sync ───────────────────────────────────

// Wrap data-mutating functions to auto-sync after each change
(function patchForSync() {
  const patched = ['saveDB', 'saveDiary'];
  patched.forEach(fn => {
    const orig = window[fn];
    if (typeof orig === 'function') {
      window[fn] = function(...args) {
        orig.apply(this, args);
        scheduleSync();
      };
    }
  });

  // Also hook localStorage saves from weight tracker
  const origSaveWeightLog = window.saveWeightLog;
  if (typeof origSaveWeightLog === 'function') {
    window.saveWeightLog = function() {
      origSaveWeightLog();
      scheduleSync();
    };
  }
})();

// ── INIT ──────────────────────────────────────────────────────────────────────
initFirebase();
