
const btn = document.querySelector('#btn');
const temperature = document.querySelector('.temperature')



btn.addEventListener('click', function(e){
    e.preventDefault()
    const input = document.querySelector('#city-input').value

    const render = data => {
        const { main, weather } = data;
        const { temp, temp_min, temp_max, feels_like } = main;
        const [ firstWeatherItem ] = weather;
        const { description, icon } = firstWeatherItem;
        // Same as:
        // const main = data.main;
        // const weather = data.weather;
        const tempRounded = Math.round(temp)
        const weatherDescription = (description)
        const feelsLike = Math.round(feels_like)
        const minTemp = Math.round(temp_min)
        const maxTemp = Math.round(temp_max)
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        
        temperature.innerHTML =
    `<div class="current-temperature"><span class="emoji"> <img src=${iconUrl} /></span>
        <p id="current-temperature">${tempRounded}°C</p>
        <p id="subtitle">${weatherDescription}</p>
    </div>
    <div class="extra-details">
        <div class="feels-like">
            <div class="title"><h3>Feels Like:</h3></div>
            <div class="body"><p>${feelsLike}°C</p></div>
        </div>
        <div class="min">
            <div class="title"><h3>Min:</h3></div>
            <div class="body"><p>${minTemp}°C</p></div>
        </div>
        <div class="max">
            <div class="title"><h3>Max:</h3></div>
            <div class="body"><p>${maxTemp}°C</p></div>
        </div>
    `
    }

    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?q=${input}&units=metric`)
    .then(res => res.json())
    .then(render) 

})
    


