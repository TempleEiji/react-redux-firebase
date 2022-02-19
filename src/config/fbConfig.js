import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlC1S3Zv-H5aPH1WEsyXjgNKdbi52z5TQ",
  authDomain: "react-redux-e41a5.firebaseapp.com",
  databaseURL: "https://react-redux-e41a5-default-rtdb.firebaseio.com/",
  projectId: "react-redux-e41a5",
  storageBucket: "react-redux-e41a5.appspot.com",
  messagingSenderId: "964020525123",
  appId: "1:964020525123:web:446239f0cf8fb72184dcf6",
  measurementId: "G-5T0159W79J"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;