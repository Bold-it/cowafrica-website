// Firebase Configuration - TEMPLATE
// IMPORTANT: Copy this file to firebase-config.js and add your actual credentials
// DO NOT commit firebase-config.js to Git (it's in .gitignore)

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Admin Secret Code
// IMPORTANT: Change this to your own secure secret code!
const ADMIN_SECRET = "YOUR_ADMIN_SECRET_HERE";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Export for use in other files
window.firebaseDB = db;
window.ADMIN_SECRET = ADMIN_SECRET;
