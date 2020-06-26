import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    RAIN, 
} from './../../../constants/Weather';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont" >
       <WeatherTemperature 
            temperature={20} 
            weatherState={RAIN}
        />
       <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;     