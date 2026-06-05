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

// Read data directly from localStorage — avoids window.DB/window.DIARY (let-scoped, not on window)
function _lsGet(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; } catch(e) { return fallback; }
}
function _lsSet(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

async function syncToCloud() {
  if (!fbUser || !fbDb) return;
  setSyncStatus('syncing');
  try {
    const allDB    = _lsGet('nkz_db', []);
    const diary    = _lsGet('nkz_diary', []);
    const profiles = _lsGet('nkz_profiles', {});
    const data = {
      weightLog:  _lsGet('nb_weight', []),
      diary:      diary.slice(-365),
      customDB:   allDB.filter(d => d.custom),
      profiles:   profiles,
      wpSettings: _lsGet('nb_wp', {}),
      goals:         _lsGet('nb_goals', {}),
      activeProfile: localStorage.getItem('nkz_active_profile') || null,
      updatedAt:     firebase.firestore.FieldValue.serverTimestamp()
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
      await syncToCloud();
      toast('Данные загружены в облако');
      return;
    }
    const cloud = snap.data();

    // Weight log — merge by date
    if (cloud.weightLog && cloud.weightLog.length > 0) {
      const local = _lsGet('nb_weight', []);
      const byDate = {};
      [...local, ...cloud.weightLog].forEach(e => { byDate[e.date] = e; });
      const merged = Object.values(byDate).sort((a,b) => a.date.localeCompare(b.date));
      _lsSet('nb_weight', merged);
      if (typeof loadWeightLog === 'function') loadWeightLog();
    }

    // Custom products — merge by id
    if (cloud.customDB && cloud.customDB.length > 0) {
      const local = _lsGet('nkz_db', []);
      const existIds = new Set(local.map(d => d.id));
      const merged = [...local];
      cloud.customDB.forEach(p => { if (!existIds.has(p.id)) { p.custom=true; merged.push(p); } });
      _lsSet('nkz_db', merged);
      if (typeof loadDB === 'function') loadDB();
    }

    // Diary — merge by id
    if (cloud.diary && cloud.diary.length > 0) {
      const local = _lsGet('nkz_diary', []);
      const existIds = new Set(local.map(e => e.id));
      const merged = [...local];
      cloud.diary.forEach(e => { if (!existIds.has(e.id)) merged.push(e); });
      _lsSet('nkz_diary', merged);
      if (typeof loadDiary === 'function') loadDiary();
    }

    // Profiles — merge keys, local takes priority for conflicts
    if (cloud.profiles && Object.keys(cloud.profiles).length > 0) {
      const local = _lsGet('nkz_profiles', {});
      const merged = { ...cloud.profiles, ...local };
      _lsSet('nkz_profiles', merged);
      // Restore active profile if not set locally
      if (!localStorage.getItem('nkz_active_profile') && cloud.activeProfile) {
        localStorage.setItem('nkz_active_profile', cloud.activeProfile);
      }
      if (typeof loadProfiles === 'function') loadProfiles();
    }

    // Goals — cloud wins if local is default/empty
    if (cloud.goals && Object.keys(cloud.goals).length > 0) {
      const local = _lsGet('nb_goals', null);
      if (!local) _lsSet('nb_goals', cloud.goals);
    }

    // WP settings — local takes priority
    if (cloud.wpSettings) {
      const local = _lsGet('nb_wp', {});
      _lsSet('nb_wp', { ...cloud.wpSettings, ...local });
      if (typeof loadWpSettings === 'function') loadWpSettings();
    }

    setSyncStatus('ok');
    toast('Данные синхронизированы ☁');

    if (typeof renderDB === 'function') renderDB();
    if (typeof renderDash === 'function') renderDash();

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
(function patchForSync() {
  ['saveDB', 'saveDiary', 'saveProfiles', 'saveWeightLog', 'saveWpSettings'].forEach(fn => {
    const orig = window[fn];
    if (typeof orig === 'function') {
      window[fn] = function(...args) { orig.apply(this, args); scheduleSync(); };
    }
  });
})();

// ── INIT ──────────────────────────────────────────────────────────────────────
initFirebase();
