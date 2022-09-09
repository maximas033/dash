// array of random greetings
var greetings = ["Hello", "Hi", "Hey", "Howdy", "Greetings", "Salutations",];
var name = "Max";
let greeting = greetings[Math.floor(Math.random() * greetings.length)];
document.getElementById("greeting2").innerHTML = greeting + " " + "Max";
// array of random day wishes
var wishes = ["Have a wonderful day", "Have a great day", "Have a good day", "Have a nice day", "Have a pleasant day", "Have a lovely day", "Stay positive", "Don't forget to smile", ];
let wishesDisplay = wishes[Math.floor(Math.random() * wishes.length)];
document.getElementById("wishes").innerHTML = wishesDisplay;
