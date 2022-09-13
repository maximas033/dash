// geet nightmodeon 
// if the nightmode is on, turn it off
function turnOn(){
    var isTurnedOn = true
        // set the background color to darker blue 
    document.body.style.background = "linear-gradient(to right, #804e9c, #6f99a8)";
    db.collection("NightMode").add({
        nightmode: isTurnedOn,
    })
    // delete the document from the NightModeOff collection
    db.collection("NightModeOff").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            doc.ref.delete();
        });
    }
    );
}


function turnOff(){
    var isTurnedOff = false
        // set the background color to darker blue 
    document.body.style.background = "linear-gradient(to right, #00b09b, #96c93d)";
    db.collection("NightModeOff").add({
        nightmode: isTurnedOff,
    })

    // turn off the nightmode from NightMode collection
    db.collection("NightMode").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            doc.ref.delete();
        });
    }
    );
}