// fetch https://v1.nocodeapi.com/maximascoder/ow/hJVgcrOJCUhvrMnz/byCityName?q=Tacoma 

function gettheCurrentWeather(){
    let url = 'https://v1.nocodeapi.com/maximascoder/ow/hJVgcrOJCUhvrMnz/byCityName?q=Tacoma';
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            return data
        })
        // display name of the city inside cityName element
        .then((data) => {
        var cityNameDisplay = data.name;
        document.getElementById("cityName").innerHTML = cityNameDisplay;
            if (data.weather[0].description === "clear sky") {
                document.getElementById("picture").src = "sun.png";
            }else if (data.weather[0].description === "scattered clouds") {
                document.getElementById("picture").src = "clouds.png";
            }
            else if (data.weather[0].description === "shower rain") {
                document.getElementById("picture").src = "rain.png";
            }
            else if (data.weather[0].description === "rain") {
                document.getElementById("picture").src = "rain.png";
            }
            else if (data.weather[0].description === "thunderstorm") {
                document.getElementById("picture").src = "storm.png";
            }
            else if (data.weather[0].description === "snow") {
                document.getElementById("picture").src = "snow.png";
            }
            else if (data.weather[0].description === "few clouds") {
                document.getElementById("picture").src = "clouds.png";
            }
            else if (data.weather[0].description === "mist") {
                document.getElementById("picture").src = "mist.png";
            }
            else if (data.weather[0].description === "haze") {
                document.getElementById("picture").src = "mist.png";
            }
            else if (data.weather[0].description === "overcast clouds") {
                document.getElementById("picture").src = "clouds.png";
            }
            else if (data.weather[0].description === "smoke") {
                document.getElementById("picture").src = "smoke.png";
            }
            return data
        })
        // display weather description inside weatherDescription element
        .then((data) => {
        var weatherDescriptionDisplay = data.weather[0].description;
        var weathD =  document.getElementById("weatherDescription")
        weathD.innerHTML = weatherDescriptionDisplay;
        // dark dark green color for the weather description
        return data
        }
        )
        // display weather temperature inside temperature element
        .then((data) => {
        var temperatureDisplay = data.main.temp;
        // convert temperature from Kelvin to Fahrenheit
        var temperatureDisplayF = Math.round((temperatureDisplay - 273.15) * 9/5 + 32);
        // display celcius circle symbol after temperature value 
        document.getElementById("temperature").innerHTML = temperatureDisplayF + "°F";
        return data
        }
        )
        // get the sunset and sunrise time 
        .then((data) => {
        var sunriseDisplay = data.sys.sunrise;
        var sunsetDisplay = data.sys.sunset;
        // convert time from unix to readable time
        var sunriseDisplayTime = new Date(sunriseDisplay * 1000);
        var sunsetDisplayTime = new Date(sunsetDisplay * 1000);
        // display sunrise and sunset time inside sunrise element and sunset element
        document.getElementById("timerise").innerHTML = "Rise: " + sunriseDisplayTime.toLocaleTimeString();
        document.getElementById("timeset").innerHTML = "Set: " + sunsetDisplayTime.toLocaleTimeString();
        return data
        }
        )
}
        // display temperature inside temp element