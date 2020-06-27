import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    WINDY,
    RAIN, 
} from './../../constants/Weather';

const location = "Bogota,co";
const api_key = "e0cd1ca1b7c0d4e6ffa6755e2fefab91";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor() {
        super();    
        this.state = {
            city: "Bogotá D.C",
            data: data,
        };
    }

    getWeatherState = Weather_data => {
        return RAIN
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = RAIN

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }
    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {

            return resolve.json();
        }).then(data => {

            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });

        });
    }
    render () {
        const { city, data }  = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;