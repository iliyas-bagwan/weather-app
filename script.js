$(document).ready(function () {
    console.log("its working");

    let weather = {
        "apiKey": "d88918b9cadbbd4f4c90aee54f270bd3",
        fetchWeather: function (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`).then(resp => resp.json()).then(data => this.displayWeather(data))
        },
        displayWeather: function (data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, speed);

            $(".city").text(`Weather in ${name}`);
            $(".icon").attr("src", `http://openweathermap.org/img/wn/${icon}.png`);
            $(".description").text(description);
            $(".temp").html(`${temp}&#176C`);
            $(".humidity").text(`Humidity: ${humidity}%`);
            $(".wind").text(`Wind Speed: ${speed} km/h`);
            $("body").css({ "background-image": `url('https://source.unsplash.com/1600x900/?+${name}')` })
        },
        searchWeather: function () {
            this.fetchWeather($("input").val())
        }

    };
    $("#search").click(function () {
        weather.searchWeather()
    });

    $("input").keyup(function (event) {
        if (event.key == "Enter") {
            weather.searchWeather();
        }
    })
})



