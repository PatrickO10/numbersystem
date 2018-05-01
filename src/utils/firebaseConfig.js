import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUuPKHaEfiOe9h53J9qV5F18RwIoOWDQ0",
    authDomain: "numsystem-f2f5e.firebaseapp.com",
    databaseURL: "https://numsystem-f2f5e.firebaseio.com",
    projectId: "numsystem-f2f5e",
    storageBucket: "",
    messagingSenderId: "742341612520"
};


export default firebase.initializeApp(config);