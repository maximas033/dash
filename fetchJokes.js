// fetch https://api.jokes.one 
//
function getJokes(){
    let url = 'https://api.jokes.one/jod';
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            return data
        })
       // display the joke inside joke element
        .then((data) => {
            document.getElementById("joke").innerHTML = data.contents.jokes[0].joke.text;
        }
    )
}
