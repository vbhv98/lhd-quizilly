import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD1uw13dGseiWjCQ88oAcnwOVbBEqxWyrk",
    authDomain: "quizilly-39cfb.firebaseapp.com",
    databaseURL: "https://quizilly-39cfb.firebaseio.com",
    projectId: "quizilly-39cfb",
    storageBucket: "quizilly-39cfb.appspot.com",
    messagingSenderId: "318192658424"
};

firebase.initializeApp(config);
export default firebase;