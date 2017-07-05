var express = require('express');
var firebase = require('firebase');
var admin = require("firebase-admin");


var config = {
    apiKey: "AIzaSyCAd3SHjSI8jMqiIlyEN-U92S1bBPH7pHM",
    authDomain: "fir-a62a2.firebaseapp.com",
    databaseURL: "https://fir-a62a2.firebaseio.com",
    projectId: "fir-a62a2",
    storageBucket: "fir-a62a2.appspot.com",
    messagingSenderId: "862006673793"
  };
  
firebase.initializeApp(config)

console.log(firebase.app().name); 


var FirebaseRef = firebase.database().ref();
var router = express.Router();


var FirebaseContent = {};
FirebaseRef.on("value", function(snapshot) {
  FirebaseContent = snapshot.ref;
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
}); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
