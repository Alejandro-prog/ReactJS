import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY, 
    SUN,
    RAIN,
    SNOW,
    WINDY,       
} from './../constants/Weather';

const WeatherData = () => (
    <div>
       <WeatherTemperature 
            temperture={20} 
            weatherState={RAIN}
        />
       <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;     