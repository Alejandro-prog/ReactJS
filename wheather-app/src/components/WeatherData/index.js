import React from 'react';
import WeatherTemperature from '../WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    SUN,      
} from '../../../constants/Weather';

const WeatherData = () => (
    <div>
       <WeatherTemperature 
            temperture={20} 
            weatherState={SUN}
        />
       <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;     