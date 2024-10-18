const apiKey = 'eeb2955a3047c339352d64892f0a4122'

async function getWeatherByCity(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`)

        const data = await response.json()

        if(response.ok){
            document.querySelector('#weatherResult').innerHTML = `<p>O clima na cidade de ${city} é:  ${data.main.temp}° com ${data.weather[0].description} </p>`
        }
    }
    catch(error){
        console.log(error)
    }   
}

document.getElementById('getWeather').addEventListener('click', ()=>{
    const city = document.getElementById('city').value;

    if(city){
        getWeatherByCity(city);
    }else{
        document.getElementById('WeatherResult').innerHTML = `<p>Por favor insira um nome valido</p>`
        alert('não deu certo');
    }
})