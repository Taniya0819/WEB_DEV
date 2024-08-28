// for a particular city ->

// const apiKey = "2d084661fd572866550f9c8d44c1ff68";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
// // https://api.openweathermap.org/data/2.5/weather?q=india&appid=2d084661fd572866550f9c8d44c1ff68&units=metric
// async function checkWeather(){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
// }
// checkWeather();

// for different cities ->

const apiKey = "2d084661fd572866550f9c8d44c1ff68";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


// https://api.openweathermap.org/data/2.5/weather?q=india&appid=2d084661fd572866550f9c8d44c1ff68&units=metric
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/ICONS/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="/ICONS/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="/ICONS/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="/ICONS/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="/ICONS/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="/ICONS/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";

    }

}

    
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

