import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDhivUAzO1-ShTvE_28WJevFH0ANP3rV3g",
    authDomain: "react-wallpaper-74d74.firebaseapp.com",
    projectId: "react-wallpaper-74d74",
    storageBucket: "react-wallpaper-74d74.appspot.com",
    messagingSenderId: "1027156409569",
    appId: "1:1027156409569:web:4ec5d1d36bbff38a5ecba0"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{projectStorage, projectFirestore, timestamp};
   