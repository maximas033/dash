// fetch https://v1.nocodeapi.com/maximascoder/spotify/igugFUmJFsAugqBD/search?q=chill and play

function getSpotifyMusic(){
    let url = "https://v1.nocodeapi.com/maximascoder/spotify/igugFUmJFsAugqBD/search?q=chill";
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            return data
        })
        // check if there are data items in the array
        // if no data or there is error, display error message
        .then((data) => {
            if (data.length === 0 || data.error) {
                document.getElementById("spotifyMusic").innerHTML = "NO MUSIC FOUND";
                return data
            }
            else{
                //loop thought and display first song inside iframe
                for (var i = 0; i < data.albums.items.length; i++) {
                    document.getElementById("spotifyMusic").innerHTML = `<iframe src="https://open.spotify.com/embed/album/${data.albums.items[i].id}" width="auto" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
                    break
                }
            }
            return data
        }
    )
}

