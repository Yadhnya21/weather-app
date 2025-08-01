import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    const API_KEY = '928b97c47bc2c538044438099898def0';

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        if (error) {
            setError(false);
        }
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity('');
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        } catch (err) {
            setError(true, err);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: 'red' }}>No such Place Exist!</p>}
            </form>
        </div>
    );
}
