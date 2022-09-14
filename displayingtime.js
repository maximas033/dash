function showTimeNow(){
    // get current time
    var currentTime = new Date();
    // get current hour
    var hours = currentTime.getHours();
    // get current minutes
    var minutes = currentTime.getMinutes();
    // get current seconds
    var seconds = currentTime.getSeconds();

    // add 0 to minutes and seconds if they are less than 10
    if (minutes < 10) {
        minutes = "0" + minutes;
    }   
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // convert the hour to 12 hour format
    if (hours > 12) {
        hours = hours - 12;
    }
    // display am or pm
    var amPm = (hours < 12) ? "AM" : "PM";
    //update the time every second
    var time = setTimeout(showTimeNow, 1000);
    // display the time
    document.getElementById("displayingTime").innerHTML = hours + ":" + minutes + ":" + seconds + " " + amPm;
}