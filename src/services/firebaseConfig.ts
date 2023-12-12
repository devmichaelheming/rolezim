import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDalritkalzp9Sg_iRUJHmhNQMPbedr4Vo",
  authDomain: "rolezim-auth.firebaseapp.com",
  projectId: "rolezim-auth",
  storageBucket: "rolezim-auth.appspot.com",
  messagingSenderId: "797837054448",
  appId: "1:797837054448:web:651bd2e618a4c354488d35",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
