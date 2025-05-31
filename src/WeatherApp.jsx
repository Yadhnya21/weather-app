import SearchBox from './SearchBox.jsx'; 
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'Mumbai',
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: 'haze',
    })

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign:'center'}} className='weather-app-container'>
            <p className='app-title'>Weather-App</p>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}