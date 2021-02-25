const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "scrimba-instagram-clone-react.firebaseapp.com",
  projectId: "scrimba-instagram-clone-react",
  storageBucket: "scrimba-instagram-clone-react.appspot.com",
  messagingSenderId: process.env.FIREBASE_MS_ID,
  appId: process.env.FIREBASE_APP_ID
};

// www.gstatic.com/firebasejs/8.2.9/firebase-app.js pulled in on index.html
// declares a firebase global variable (on window)
// so, we can now write window.firebase...
const Firebase = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore; // Karl: window.firebase.firestore;

export { Firebase, FieldValue };
