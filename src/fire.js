import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1mOM6wv8UMyh_f-P3oXZPAukbMp6FisA",
    authDomain: "test-project-1b484.firebaseapp.com",
    databaseURL: "https://test-project-1b484.firebaseio.com",
    projectId: "test-project-1b484",
    storageBucket: "test-project-1b484.appspot.com",
    messagingSenderId: "1002967432194"
  };
var fire = firebase.initializeApp(config);
export default fire;