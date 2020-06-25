import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    RAIN, 
} from './../../../constants/Weather';

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