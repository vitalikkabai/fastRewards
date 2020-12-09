import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDXXN0eAxafgPPeefHw6-1RSkiCN4vuo-U",
  authDomain: "fastrewordstest.firebaseapp.com",
  projectId: "fastrewordstest",
  databaseURL: 'https://fastrewordstest-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: "fastrewordstest.appspot.com",
  messagingSenderId: "1082902977561",
  appId: "1:1082902977561:web:e93299738c26ca503a9e88"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
