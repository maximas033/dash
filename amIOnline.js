// check if the user is online
// if the user is online, then the function will return true    
// if the user is offline, then the function will return false

function amIOnline() {
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
}

function updateStatus(event){
    if(navigator.onLine){
       var isOnline = document.getElementById("idOnline")
       isOnline.style.color = "green"
       isOnline.style.animation = "blink 1s linear infinite"
       isOnline.innerHTML = "Your device is online"
       // green circle that ha a pulse animation
    }else {
        var isOnline = document.getElementById("idOnline")
        isOnline.innerHTML = "Your is offline"
    }
}
