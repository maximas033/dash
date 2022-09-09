function displayBackground(){
var d = new Date();
var n = d.getHours();
// change the background color based on the time of day
if (n < 12) {
    // set the background color to be gradient from light red to light orange
    document.body.style.background = "linear-gradient(to right, #FF8008, #FFC837)";
    // cool dark orange color for the container div 
    document.getElementById("WEath").style.background = "#ff7700";
    // give the opacity of the background color a value of 0.5
} else if (n < 18) {
    // set the background color to be gradient from light green to white
    document.body.style.background = "linear-gradient(to right, #00b09b, #96c93d)";
    // cool dark green color for the container div 
    document.getElementById("WEath").style.background = "#009688";
}else if (n < 24) {
    // set the background color to be gradient from light blue to light white
    document.body.style.background = "linear-gradient(to right, #804e9c, #6f99a8)";
    // cool cool blue color for the container div
    document.getElementById("WEath").style.background = "#6f99a8";
}
}

// refresh the function every 1 second
setInterval(displayBackground, 1000);


