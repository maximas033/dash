// fetch https://v1.nocodeapi.com/maximascoder/github/KwNXXUAYEWclLkXP/repos
//
function getGithubRepos(){
    let url = 'https://v1.nocodeapi.com/maximascoder/github/KwNXXUAYEWclLkXP/repos';
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
                document.getElementsByClassName("githubInformation").innerHTML = "NO REPOS FOUND";
                return data
            }
            else{
                //loop thought and display all repos
                for (var i = 0; i < data.length; i++) {
                   // display all repos names inside githubInformation element
                    var githubInformationDisplay = data[i].name;
                    var githubInformation =  document.getElementById("githubReposName")
                    githubInformation.innerHTML += "Repository Name: " + " "  + githubInformationDisplay + "<br>";
                    // make all githubInformationDisplay uppercase
                    githubInformationDisplay = githubInformationDisplay.toUpperCase();
                    // for each repo name give a 3% margin bottom
                    githubInformation.style.marginBottom = "5%";

                }
            }
            return data
        }
    )
}

