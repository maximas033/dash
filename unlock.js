function unlockDashboard() {
    // ask for a password and check it
    let password = prompt("Enter password");
    if (password === "12345q"){
        // if password is correct, display the dashboard
       alert("Password is correct, unlocking dashboard");
       // delete LockDown datacollection 
         let db = firebase.firestore();
            db.collection("LockDown").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    db.collection("LockDown").doc(doc.id).delete().then(() => {
                        console.log("Document successfully deleted!");
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
            });
        });

        // wait for 2 seconds and reload the page
        setTimeout(function(){ location.reload(); }, 2000);

    }else{
        // if password is incorrect, display error message
        alert("Password is incorrect, please try again");
        return
    }
}