var firebaseConfig = {
    apiKey: "AIzaSyBXB33oSv_lv6qH9Wh0tGTrXzASZlzSluE",
    authDomain: "dashboard-6facd.firebaseapp.com",
    projectId: "dashboard-6facd",
    storageBucket: "dashboard-6facd.appspot.com",
    messagingSenderId: "312348977620",
    appId: "1:312348977620:web:8f3ebc9b8a03f507420e41",
    measurementId: "G-34ZNHZD200"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function lockDown(){
    // saving the data to the firestore database
    var islockDown = true;
    let db = firebase.firestore();
    db.collection("LockDown").add({
        islockDown: islockDown,
    })
    document.getElementById("unlockLock").style.display = "block";

    // change the whole background color of the body to red
    document.body.style.backgroundColor = "red";
    document.getElementById("displayingGreeting").innerHTML = "LockDown Mode Activated";
    document.getElementById("displayingGreeting").style.color = "white";
    document.getElementById("greet").style.backgroundColor = "red";
    document.getElementById("greet").style.color = "white";
    document.getElementById("displayingTime").style.color = "white";
    document.getElementById("compliments").style.display = "none";
    document.getElementById("idOnline").style.display = "none";
    document.getElementById("messagedisplay").style.color = "white";
    document.getElementById("off").style.display = "none";
    document.getElementById("dataLockDown").style.display = "none";
    document.getElementById("listNAvigation").style.display = "none";
    document.getElementById("buttnot").style.display = "none";
}