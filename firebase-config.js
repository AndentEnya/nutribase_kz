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
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Set to false to disable cloud sync entirely
const CLOUD_SYNC_ENABLED = true;
