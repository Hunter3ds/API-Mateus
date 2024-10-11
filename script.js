const apiKey = 'eeb2955a3047c339352d64892f0a4122'

async function getWeatherByCity(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`) 
        const data = await response.json()

        console.log(`Clima em ${city}: ${data.weather[0].description} ${data.main.temp}`)
    }
    catch(error){
        console.log(error)
    }
}

getWeatherByCity("Belém")