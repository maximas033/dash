// function getNews(){
//     // fetch(`https://gnews.io/api/v4/search?q=example&token=5254235f23e9eb42d3087cc7ad58fa37`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         return data
//     })
//     // display the news heading inside HeaDing
//     .then(data => {
//         var heading = document.getElementById("HeaDing")
//         heading.innerHTML = data.articles[0].title;
//         heading.style.color = "black";
//         heading.style.textAlign = "left";
//         heading.style.fontWeight = "bolder";
//         heading.style.fontSize = "15px";
//         return data
//     })
//     // display the first news article description
//     .then(data => {
//         //loop through the articles and idsplay the first one 
//         for(var i = 0; i < data.articles.length; i++) {
//             var description = document.getElementById("newwsDisplay")
//             description.innerHTML = data.articles[i].description;
//             description.style.color = "black";
//             description.style.textAlign = "left";
//             description.style.fontWeight = "lighter";
//             description.style.fontSize = "13px";
//         }   
//     })

// }

