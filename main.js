var firebaseConfig = {
    apiKey: "AIzaSyCQSNbFSlpbSiAluluZUKiAcsN8PVL1Xas",
    authDomain: "playzone-56d5e.firebaseapp.com",
    databaseURL: "https://playzone-56d5e.firebaseio.com",
    projectId: "playzone-56d5e",
    storageBucket: "playzone-56d5e.appspot.com",
    messagingSenderId: "1039161710287",
    appId: "1:1039161710287:web:3a7ba9b2cfd7342b8089ba",
    measurementId: "G-N8QSQ5LY9H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function pubgSquad() {
    var docRef = db.collection("games").doc("pubgsquad");

    docRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log("Data",doc.get("pubgsquad"));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}
pubgSquad();
