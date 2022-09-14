// fetch https://v1.nocodeapi.com/maximascoder/calendar/TptyJqGDBCFvcFYR/listEvents
//
function getCalendarEvents(){
    let url = 'https://v1.nocodeapi.com/maximascoder/calendar/TptyJqGDBCFvcFYR/listEvents';
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
                document.getElementById("calendarEvents").innerHTML = "NO EVENTS FOUND FOR TODAY";
                document.getElementById("eventsNumber").innerHTML =  + "0 events today";
                return data
            }
            else{
                document.getElementById("calendarEvents").innerHTML = " ";
                // loop through data.items.summary array and add each item to the list
                for (var i = 0; i < data.items.length; i++) {
                    // make a count on the number of events
                    var count = i + 1;
                    var li = document.createElement("li");
                    li.innerHTML = data.items[i].summary;
                    // remove the bullet points from the list
                    li.style.listStyleType = "none";
                    // add a 2px solid border to the list items
                    li.style.borderLeft = "3px solid black";
                    // for each item, add a empty paragraph element
                    var p = document.createElement("p");
                    var breakLine = document.createElement("br");
                    // align the elements to the left
                    li.style.textAlign = "left";
                    //padding-left: 10px;
                    li.style.paddingLeft = "10px";
                    document.getElementById("calendarEvents").appendChild(li);
                    document.getElementById("calendarEvents").appendChild(breakLine);
                    document.getElementById("eventsNumber").innerHTML = count + " events today";
                }
            }
        }
    )
}


