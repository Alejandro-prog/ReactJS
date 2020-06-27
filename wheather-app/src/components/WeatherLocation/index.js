import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    WINDY,
    RAIN, 
} from './../../constants/Weather';

const data = {
    temperature: 5,
    weatherState: RAIN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 20,
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

    handleUpdateClick = () => {
        console.log("ACTUALIZADO");

        this.setState({
            data: data2,
        })
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