var express = require('express');
var firebase = require('firebase');


var config = {
    apiKey: "ACDIzaSyCAd3SHjSI8jMqiIlyEN-U92S1bBPH7pHM",
    authDomain: "fir-cda62a2.firebaseapp.com",
    databaseURL: "https://fir-cda62a2.firebaseio.com",
    projectId: "fir-cda62a2",
    storageBucket: "fir-cda62a2.appspot.com",
    messagingSenderId: "9862006673793"
  };
  
firebase.initializeApp(config)

console.log(firebase.app().name); 


var FirebaseRef = firebase.database().ref();
var router = express.Router();


var FirebaseContent = {};
FirebaseRef.on("value", function(snapshot) {
  FirebaseContent = snapshot.val();
  console.log("Connected");
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
}); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Firebase' });
});

module.exports = router;
