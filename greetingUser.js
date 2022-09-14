function Greetings(){
    // get the current time
    var currentTime = new Date();
    // get the current hour
    var hours = currentTime.getHours();
    // Here you can change your name
    // if the time 12am to 12pm
    let greetingsMessage = document.getElementById("displayingGreeting")
    if (hours < 12) {
        greetingsMessage.innerHTML = ('Good morning ' + "Max");
    // if the time is 12pm to 5pm
    }else if (hours >= 12 && hours <= 17) {
        // show this message
        greetingsMessage.innerHTML = ('Good afternoon ' + "Max");
    // if the time is 5pm to 12am
    }   else if (hours >= 17 && hours <= 24) {
        // show this message
        greetingsMessage.innerHTML = ('Good evening ' + "Max");
    }


    // array of compliments
    var compliments = [ "You got this!", "Make smart choices", "Be patient", "Be kind and make great choices", "Be friendly", "Help others", "Dont forget to smile", "Be nice", "Have a lovely day ahead of you"]
    // loop through the array
    for (var i = 0; i < compliments.length; i++) {
        // get a random number
        var random = Math.floor(Math.random() * compliments.length);
        // display the random compliment
        document.getElementById("compliments").innerHTML = compliments[random];
    }
}
