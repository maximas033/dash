// get a current date and the week day
function displayFullDay(){
    var d = new Date();
    var n = d.getDay();
    var day = d.getDate();
    // get time     
    var h = d.getHours();
    var m = d.getMinutes();
    // get current month
// convert the number of the day to the name of the day
    if (n === 0) {
        n = "Sunday";
    }
    else if (n === 1) {
        n = "Monday";
    }
    else if (n === 2) {
        n = "Tuesday";
    }
    else if (n === 3) {
        n = "Wednesday";
    }
    else if (n === 4) {
        n = "Thursday";
    }
    else if (n === 5) {
        n = "Friday";
    }
    else if (n === 6) {
        n = "Saturday";
    }
// Depending on the time of day, display a greeting
    if (h < 12) {
        greeting = "Good Morning";
    }
    else if (h < 18) {
        greeting = "Good Afternoon";
    }
    else if (h < 24) {
        greeting = "Good Evening";
    }
// display the greeting, the day of the week, and the date
    var greet = document.getElementById('greeting')
    greet.innerHTML = greeting;
    greet.style.fontWeight = "bolder";
    var dateToday = document.getElementById('date')
    dateToday.innerHTML = n + ", " + day;
    dateToday.style.fontWeight = "normal"
}
// refresh the function every 6 hours
setInterval(displayFullDay, 21600000);
