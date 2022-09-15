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
                document.getElementById("weatherPicture").src = "sun.png";
            }else if (data.weather[0].description === "scattered clouds") {
                document.getElementById("weatherPicture").src = "clouds.png";
            }
            else if (data.weather[0].description === "shower rain") {
                document.getElementById("weatherPicture").src = "rain.png";
            }
            else if (data.weather[0].description === "rain") {
                document.getElementById("weatherPicture").src = "rain.png";
            }
            else if (data.weather[0].description === "thunderstorm") {
                document.getElementById("weatherPicture").src = "storm.png";
            }
            else if (data.weather[0].description === "snow") {
                document.getElementById("weatherPicture").src = "snow.png";
            }
            else if (data.weather[0].description === "few clouds") {
                document.getElementById("weatherPicture").src = "clouds.png";
            }
            else if (data.weather[0].description === "mist") {
                document.getElementById("weatherPicture").src = "mist.png";
            }
            else if (data.weather[0].description === "haze") {
                document.getElementById("weatherPicture").src = "mist.png";
            }
            else if (data.weather[0].description === "overcast clouds") {
                document.getElementById("weatherPicture").src = "clouds.png";
            }
            else if (data.weather[0].description === "broken clouds") {
                document.getElementById("weatherPicture").src = "clouds.png";
            }
            else if (data.weather[0].description === "smoke") {
                document.getElementById("weatherPicture").src = "smoke.png";
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
        })
        // display feels like temperature inside feelsLike element
        .then((data) => {
        var feelsLikeDisplay = data.main.feels_like;
        // convert temperature from Kelvin to Fahrenheit
        var feelsLikeDisplayF = Math.round((feelsLikeDisplay - 273.15) * 9/5 + 32);
        // display celcius circle symbol after temperature value 
        document.getElementById("feelsLikedeg").innerHTML = "Feels like: " + feelsLikeDisplayF + "°F";
        return data
        })
        // display humidity inside humidity element
        .then((data) => {
        var humidityDisplay = data.main.humidity;
        document.getElementById("humidity").innerHTML = "Humidity: " + humidityDisplay + "%";
        return data
        })
        // display wind speed inside windSpeed element
        .then((data) => {
        var windSpeedDisplay = data.wind.speed;
        document.getElementById("windSpeed").innerHTML = "Wind speed: " + windSpeedDisplay + " mph";
        return data
        })
    }
