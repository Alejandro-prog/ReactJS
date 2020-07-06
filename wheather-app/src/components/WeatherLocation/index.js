import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;  
        
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
            this.handleUpdateClick();
    }

    handleUpdateClick = () => {

        const api_weather = getUrlWeatherByCity(this.state.city)

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
                    <CircularProgress size={50}></CircularProgress>
                }               
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;