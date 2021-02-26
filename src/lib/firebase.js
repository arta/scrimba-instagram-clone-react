// #############################################################################
// 2-26-21: ran into a cascading & interlaced issues here
// From top to bottom of it all:

// 1) Immediate error: CORS. Err message:
// "Cross-Origin Request Blocked: The Same Origin Policy
// disallows reading the remote resource at
// https://www.gstatic.com/firebasejs/8.2.9/firebase-firestore.js.
// (Reason: CORS header ‘Access-Control-Allow-Origin’ missing)."
// I spent a LOT of time trying to resolve unsuccessfully

// 2) To discover this was not CORS issue.
// This was caused by invalid data send to Firebase. Some post somewhere made
// me realize this. Then I paid attention to this Err message:
// "Uncaught FirebaseError: Function addDoc() called with invalid data.
// Unsupported field value: undefined (found in field userId in document
// users/g6ZGQFwYQA9Zqv3niyjK)"

// 2.1) This I suspected to be a possible source of problems all along.
// Caused by environment variables not being accessed from React app JS.
// Turns out, React solves this; env variable must start with `REACT_APP_`
// https://create-react-app.dev/docs/adding-custom-environment-variables/
// But fixing that took me to yet another, kinda "root" cause of it all

// 2.2) The "root" cause regardless of all of the above. Err message:
// "Uncaught (in promise) FirebaseError: Missing or insufficient permissions."
// That's right, the permissions set in firebase console require being logged in
// to write data (which seeding a databse is).
// FIX: temporarily (for firebase seeding only), make authentication rules (in
// the firebase console project authenticaiton setting):
// "allow read, write;"
// then - right after seeding - turn the rules back to:
// "allow read; allow write: if request.auth.uid != null;"
// #############################################################################



// import { seedDatabase } from '../seed'; // run only 1x, for db seeding

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "scrimba-instagram-clone-react.firebaseapp.com",
  projectId: "scrimba-instagram-clone-react",
  storageBucket: "scrimba-instagram-clone-react.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MS_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// www.gstatic.com/firebasejs/8.2.9/firebase-app.js pulled in on index.html
// declares a firebase global variable (on window)
// so, we can now write window.firebase...
const FirebaseApp = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = FirebaseApp.firestore; // Karl: window.firebase.firestore

// seedDatabase(FirebaseApp); // run only 1x, for db seeding

export { FirebaseApp, FieldValue };
