import firebase from "./firebaseConfig";

export const createUser = (user) =>
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, ' ', errorMessage)
    })

export const signIn = (user) =>
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, ' ', errorMessage)
    })

export const signOut = () =>
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    })