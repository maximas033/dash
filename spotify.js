function getSpotify(){
// create a new speech recognition object
var recognition = new webkitSpeechRecognition();
recognition.start();
var synthesis = new SpeechSynthesisUtterance();
synthesis.rate = 10;
// print the recognition result to the console
recognition.onresult = function(event) {
    console.log(event.results[0][0].transcript);
    console.log(event.results[0][0].confidence);
    // check if the confidence is less than 0.5 and if so, say "I don't understand"
    if(event.results[0][0].confidence < 0.5){
        console.log("Sorry, I didn't understand that, please try agian");
    }
// onstop listening for speech
recognition.onend = function() {
    // always start listening again
    recognition.start();
        
}


if(event.results[0][0].transcript.includes("play")){
    // get the second word in the transcript
    let song = event.results[0][0].transcript.split(" ")[1];
    // fetch the song from https://v1.nocodeapi.com/maximascoder/spotify/dsSeokgAWyGgNoTe/search?q=song
    fetch(`https://v1.nocodeapi.com/maximascoder/spotify/igugFUmJFsAugqBD/search?q=chill music`)
        .then((response) => {
          return response.json()
        }
        )
        .then((data) => {
          console.log(data)
          document.getElementById("noSong").style.display = "none";
          let iframe = document.createElement("iframe");
          iframe.src = `https://open.spotify.com/embed/album/${data.albums.items[0].id}`;
          iframe.width = "100%";
          iframe.height = "100%";
          iframe.frameborder = "0";
          iframe.allowtransparency = "true";
          iframe.style.border = "none";
          iframe.allow = "encrypted-media";
          iframe.autoplay = "true";
          // 10px border radius for iframe
            iframe.style.borderRadius = "10px";
            iframe.style.marginTop = "2%";
          document.getElementById("displaySpotify").innerHTML = iframe.outerHTML;
                }
            )
        }
    }
}
