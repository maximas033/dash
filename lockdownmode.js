// lock down mode
function lock(){
    // hide donotshow div
    document.getElementById("donotshow").style.display = "none";
    document.getElementById("donotshow2").style.display = "none";
    document.getElementById("donotshow3").style.display = "none";
    document.getElementById("donotshow4").style.display = "none";
    document.getElementById("donotshow5").style.display = "none";
    document.getElementById("unlockNow").style.display = "block";
    document.body.style.background = "#CA0B00";
    var isTurnedOn = true
    var allInformation = document.getElementsByClassName("allInformation")
    allInformation[0].style.display = "none";
    setInterval(function(){
        document.body.style.background = "#CA0B00";
    }, 1000);
    setInterval(function(){
        document.body.style.background = "#F32013";
    }, 2000);
       db.collection("LockDownMode").add({
        lockdown: isTurnedOn,
    })


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


}