
const weatherIcon=document.querySelector(".weather-icon");
const apiKey="d80fe6d7c5feb4db09cda83f60e555ff";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkWeather(city) {
    const response=await fetch(apiUrl+cityf+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"&deg;C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"; 
 document.querySelector(".wind").innerHTML=data.wind.speed+"KM/H";
 if(data.checkWeather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy.png";
    }
    else if(data.checkWeather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.checkWeather[0].main=="Clear"){
        weatherIcon.src="images/sunny.png";
 }else if(data.checkWeather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.checkWeather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";

    }


}
searchBtn.addEventListener("click",()=>{
    checkWeather(city.value);
});
