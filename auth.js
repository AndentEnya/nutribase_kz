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

    fbAuth.getRedirectResult().then(result => {
      if (result && result.user) {
        toast('Вход выполнен ✓', 'ok');
      }
    }).catch(err => {
      console.error('Redirect result error:', err);
      if (err.code && err.code !== 'auth/no-auth-event') {
        toast('Ошибка входа: ' + err.code, 'err');
      }
    });

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
  const btn   = document.getElementById('auth-btn');
  const label = document.getElementById('auth-label');
  const dot   = document.getElementById('sync-dot');
  if (!btn) return;

  if (user) {
    btn.classList.add('signed');
    label.textContent = user.displayName ? user.displayName.split(' ')[0] : 'Аккаунт';
    if (user.photoURL) {
      btn.innerHTML = `<img src="${user.photoURL}" class="auth-avatar" referrerpolicy="no-referrer"> <span>${label.textContent}</span>`;
    }
    dot.style.display = 'inline-block';
    // Update auth panel
    const n = document.getElementById('auth-panel-name');
    const e = document.getElementById('auth-panel-email');
    const a = document.getElementById('auth-avatar-big');
    if (n) n.textContent = user.displayName || '';
    if (e) e.textContent = user.email || '';
    if (a && user.photoURL) { a.src = user.photoURL; a.style.display = 'block'; }
  } else {
    btn.classList.remove('signed');
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> <span id="auth-label">Войти</span>`;
    dot.style.display = 'none';
  }
}

function toggleAuthPanel() {
  if (!fbAuth) { signIn(); return; }
  if (!fbUser) { signIn(); return; }
  const p = document.getElementById('auth-panel');
  if (!p) return;
  p.style.display = p.style.display === 'none' ? 'block' : 'none';
}

// Close panel on outside click
document.addEventListener('click', e => {
  const panel = document.getElementById('auth-panel');
  const btn   = document.getElementById('auth-btn');
  if (panel && panel.style.display !== 'none' && !panel.contains(e.target) && !btn.contains(e.target)) {
    panel.style.display = 'none';
  }
});

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
    toast('Синхронизация недоступна — Firebase не подключён', 'err');
    return;
  }
  if (isInAppBrowser()) {
    showOpenInBrowserBanner();
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  fbAuth.signInWithRedirect(provider);
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
  fbAuth.signOut().then(() => {
    document.getElementById('auth-panel').style.display = 'none';
    toast('Вы вышли из аккаунта');
  });
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
  document.getElementById('auth-panel').style.display = 'none';
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
