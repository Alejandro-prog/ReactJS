import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import { api_weather } from './../../constants/api_url';
import WeatherData from './WeatherData';
import './style.css';

class WeatherLocation extends Component {

    constructor() {
        super();    
        this.state = {
            city: "Bogotá D.C",
            data: null,
        };
    }

    componentDidMount() {
            this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {

            return resolve.json();
        }).then(data => {

            const newWeather = transformWeather(data);
            console.log(newWeather);    
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
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    "Cargando..."
                }               
            </div>
        );
    }
}

export default WeatherLocation;