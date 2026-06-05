// ──────────────────────────────────────────────────────────────────────────────
// NutriBase — Firebase Configuration
// ──────────────────────────────────────────────────────────────────────────────
//
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (e.g. "nutribase-kz")
// 3. Authentication → Sign-in method → Enable Google
// 4. Firestore Database → Create database (start in test mode)
// 5. Project Settings → Your apps → Add web app → Copy config below
// 6. Authentication → Settings → Authorized domains → add your GitHub Pages domain
//    e.g. "andentenya.github.io"
//
// Then replace the placeholder values below with your real config.
// ──────────────────────────────────────────────────────────────────────────────

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCY1tiQ6ScyOySYolVbjvwctxl9MppoMI",
  authDomain:        "nutribase-f6a19.firebaseapp.com",
  projectId:         "nutribase-f6a19",
  storageBucket:     "nutribase-f6a19.firebasestorage.app",
  messagingSenderId: "119863247458",
  appId:             "1:119863247458:web:357b47cfc29d930261873b"
};

// Set to false to disable cloud sync entirely
const CLOUD_SYNC_ENABLED = true;
