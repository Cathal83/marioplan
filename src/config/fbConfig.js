  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLEM9_fyvtb0NTWILNquMRAe9V8FCOdHc",
    authDomain: "net-ninja-marioplan-13aa6.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-13aa6.firebaseio.com",
    projectId: "net-ninja-marioplan-13aa6",
    storageBucket: "",
    messagingSenderId: "178682575350",
    appId: "1:178682575350:web:155c9193b2e4d54f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  });

  export default firebase;