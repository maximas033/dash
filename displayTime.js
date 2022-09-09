function timedisplay(){
let afterTime
var d = new Date();
// get the current hour
var h = d.getHours();
// get the current minute
var m = d.getMinutes();
// get the current second
var s = d.getSeconds();
// add a zero in front of numbers<10
m = checkTime(m);
s = checkTime(s);
// convert the time to a 12 hour clock
// if (h > 12) {
//     h = h - 12;
// }
// if in the morning, add "AM" to the time
if (h < 12) {
    afterTime = "AM";
} else{
    // if in the afternoon, add "PM" to the time
    afterTime = "PM";
}

// display the time
document.getElementById('displayTime').innerHTML = h + ":" + m + " " + afterTime;
// add a zero in front of numbers<10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
}
// refresh the timedisplay div every 1 second
setInterval(timedisplay, 1000);
