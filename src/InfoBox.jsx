import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import rain from './assets/rain.png';
import cold from './assets/cold.png';
import hot from './assets/hot.png';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css';

export default function InfoBox({ info }) {
    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card className='box' sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? rain
                                : info.temp > 15
                                ? hot
                                : cold
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            &nbsp;
                            {info.humidity > 80
                                ? <WaterDropIcon/>
                                : info.temp > 15
                                ? <SunnyIcon/>
                                : <AcUnitIcon/>}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                            component={'span'}
                        >
                            <p>Temprature: {info.temp}°C</p>
                            <p>Humidity: {info.humidity}°C</p>
                            <p>Min Temp: {info.tempMin}°C</p>
                            <p>Max Temp: {info.tempMax}°C</p>
                            <p>The weather feels like {info.feelsLike}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
