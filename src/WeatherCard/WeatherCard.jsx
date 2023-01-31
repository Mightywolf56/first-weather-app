import React from 'react'
import "./style/WeatherCard.css"

const WeatherCard = ({ weather, temps, isCelsius, changeUnitTemps }) => {
    return (
        <section className='weatherCard'>
            <h1 className='weatherCard__title'>Weather app</h1>
            <h2 className='weatherCard__place'>{weather?.name}, {weather?.sys.country}</h2>
            <div className='weatherCard__img'>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />
            </div>
            <h3 className='weatherCard__temp'>{isCelsius ? temps?.celsius + " °C" : temps?.farenheit + " °F"}</h3>
            <ul className='weatherCard__list'>
                <li className='weatherCard__description'>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
                <li><span>Wind Speed: </span>{weather?.wind.speed} m/sec</li>
                <li><span>Clouds: </span>{weather?.clouds.all} %</li>
                <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
            </ul>
            <button className='weatherCard__btn' onClick={changeUnitTemps}>&deg;C / &deg;F</button>
        </section>
    )
}

export default WeatherCard