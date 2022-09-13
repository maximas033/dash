// refresh the page every 5 minute
    setInterval(function(){
        location.reload();
    }, 300000);
    // fetch the LeavingHome collection from firebase
    let db = firebase.firestore();
    db.collection("LeavingHome").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().left}`);
            // if the user has left home, dim the screen
            if (doc.data().left == true) {
                document.body.style.opacity = "0.7";
                var update = document.getElementById("updatePosition")
                update.innerHTML = "I AM NOT INSIDE THE HOUSE";
                update.style.color = "red";
            }
            // display time inside updatedTime
            var updatedTime = document.getElementById("updatedTime")
            updatedTime.innerHTML = "I LEFT @ " + doc.data().time;
            updatedTime.style.color = "gray";
            updatedTime.style.textAlign = "center";
        });
    }
    );

    //fetch the ArrivedHome collection from firebase
    db.collection("ArrivedHome").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().left}`);
            // if the user has arrived home, undim the screen
            if (doc.data().left == true) {
                document.body.style.opacity = "1";
                var update = document.getElementById("updatePosition")
                update.innerHTML = "I AM INSIDE THE HOUSE";
                update.style.color = "green";
            }
            // display time inside updatedTime
            var updatedTime = document.getElementById("updatedTime")
            updatedTime.innerHTML = "I ARRIVED @ " + doc.data().time;
            updatedTime.style.color = "gray";
            updatedTime.style.textAlign = "center";
        });
    }
    );

    // check if the nightmode is on 
    db.collection("NightMode").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().nightmode}`);
            // if the nightmode is on, turn it off
            if (doc.data().nightmode == true) {
                // set the background color to darker blue 
                document.body.style.background = "linear-gradient(to right, #804e9c, #6f99a8)";
                // dark linear blue WEath
                var weather = document.getElementById("WEath")
                weather.style.background = "linear-gradient(to right, #6f99a8, #6f99a8)";
            }
        });
    }
    );

    // check if the nightmode is off
    db.collection("NightModeOff").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().nightmode}`);
            // if the nightmode is off, turn it on
            if (doc.data().nightmode == false) {
                // set the background color to darker blue 
                document.body.style.background = "linear-gradient(to right, #00b09b, #96c93d)";

            }
        });
    }
    );


    db.collection("LockDownMode").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().lockdown === true) {
                document.getElementById("donotshow").style.display = "none";
                document.getElementById("donotshow2").style.display = "none";
                document.getElementById("donotshow3").style.display = "none";
                document.getElementById("donotshow4").style.display = "none";
                document.getElementById("donotshow5").style.display = "none";
                document.body.style.background = "#CA0B00";
                document.getElementById("unlockNow").style.display = "block";
                setInterval(function(){
                    document.body.style.background = "#CA0B00";
                }, 1000);
                setInterval(function(){
                    document.body.style.background = "#F32013";
                }, 2000);

                // delete every other data 
                db.collection("LeavingHome").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                }
                );
                db.collection("ArrivedHome").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                }
                );
                db.collection("NightMode").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                }
                );
                db.collection("NightModeOff").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                }
                );

                // do not show any information inside allInformation
                var allInformation = document.getElementsByClassName("allInformation")
                allInformation[0].style.display = "none";

                // create h1 element to display the lockdown message
                // make it blink
                document.getElementById("lockModeOn").style.display = "block";
                // make it flash
                setInterval(function(){
                    document.getElementById("lockModeOn").style.color = "black";
                    document.getElementById("lockModeOn").style.opacity = "0.7";
                }
                , 1000);
                setInterval(function(){
                    document.getElementById("lockModeOn").style.color = "white";
                    document.getElementById("lockModeOn").style.opacity = "0.5";
                }
                , 2000);
            }else{
                var isTurnedOn = false
                // set the background color back to normal
                document.body.style.background = "linear-gradient(to right, #00b09b, #96c93d)";
                // display all the buttons and information
                document.getElementById("turnOnNightMode").style.display = "block";
                document.getElementById("turnOffNightMode").style.display = "block";
                document.getElementById("lockDownMode").style.display = "block";
                document.getElementById("unlockNow").style.display = "none";
                document.getElementById("allInformation").style.display = "block";
                // dekete the lockdownmode document
                db.collection("LockDownMode").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete();
                    });
                });
            }
        });
    }
    );
