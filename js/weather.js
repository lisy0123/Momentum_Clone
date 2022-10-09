function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "0e0ca57ab5b535a16c8a161c2222ca56";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json())
    .then(data => {
        const weatherIcon = document.querySelector(".weather-icon");
        const weather = document.querySelector(".weather");
        const location = document.querySelector(".location");

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weather.innerText = `${parseFloat(Math.round(data.main.temp * 10) / 10)}°C ${data.weather[0].main} `;
        location.innerText = `${data.name}, ${data.sys.country}`;        
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);