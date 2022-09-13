var firebaseConfig = {
    apiKey: "AIzaSyA21k-3XzaeufVn7l8rTKHiVRqb5avltcA",
    authDomain: "dashbaordd.firebaseapp.com",
    databaseURL: "https://dashbaordd-default-rtdb.firebaseio.com",
    projectId: "dashbaordd",
    storageBucket: "dashbaordd.appspot.com",
    messagingSenderId: "37887331144",
    appId: "1:37887331144:web:63be00722fbfc4a62ac17d",
    measurementId: "G-X03MJTFH4V"
  };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function leavingHome() {
    // get current time
    var d = new Date();
    var n = d.toLocaleTimeString();
    // dim the screen
    document.body.style.opacity = "0.6";
    var update = document.getElementById("updatePosition") 
    update.innerHTML = "I AM NOT INSIDE THE HOUSE";
    update.style.color = "red";
    let db = firebase.firestore();
    var isTrue = true
    db.collection("LeavingHome").add({
    left: isTrue,
    // save the current time
    time: n
    })

    // delete the document from the ArrivedHome collection
    db.collection("ArrivedHome").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            doc.ref.delete();
        });
    }
    );
        // refresh the page after 1 second
        setTimeout(function(){
            location.reload();
        }
        , 1000);
}


function arivingHome() {
    // get current time
    var d = new Date();
    var n = d.toLocaleTimeString();
    // dim the screen
    document.body.style.opacity = "1";
    var update = document.getElementById("updatePosition")
    update.innerHTML = "I AM INSIDE THE HOUSE";
    update.style.color = "green";
    let db = firebase.firestore();
    var isTrue = true
    db.collection("ArrivedHome").add({
    left: isTrue,
    // save the current time
    time: n
    })

    // delete the document from the LeavingHome collection
    db.collection("LeavingHome").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            doc.ref.delete();
        });
    }
    );
        // refresh the page after 1 second
        setTimeout(function(){
            location.reload();
        }
        , 1000);
}