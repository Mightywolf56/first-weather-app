import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import Loader from './WeatherCard/Loader';
import WeatherCard from './WeatherCard/WeatherCard'

const API_KEY = "083f5967ede187932b9f05752e262993"

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temps, setTemps] = useState();
  const [isCelsius, setIsCelsius] = useState(true);

  function succes(e) {
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude
    };

    setCoords(newCoords);
  }

  const changeUnitTemps = ()  => setIsCelsius (!isCelsius)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => {
            setWeather(res.data)
            const celsius = (res.data.main.temp - 273.15).toFixed(2)
            const farenheit = (celsius * (9/5) + 32).toFixed(2)
            const newTemps = { celsius, farenheit }
            setTemps(newTemps)
          })
            .catch(err => console.log(err))
        }
}, [coords])



  return (
    <div className="App">
      {
        weather ? (
          <WeatherCard
        weather={weather}
        temps={temps}
        isCelsius={isCelsius}
        changeUnitTemps={changeUnitTemps}
      /> 
        ) : <Loader />
      }
    </div>
  )
}

export default App
