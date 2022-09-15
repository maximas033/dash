// get the LockDown data from the firestore database
function getLockDownData(){
    let db = firebase.firestore();
    db.collection("LockDown").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().islockDown}`);
            if (doc.data().islockDown === true) {
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
        });
    });
}