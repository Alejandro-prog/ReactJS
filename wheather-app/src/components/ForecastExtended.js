import React, { Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];


const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',  
};
*/ 

const api_key = "4b9054792f165728184681ca23242f89";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExteded extends Component {
 
    constructor(){
        super();
        this.state = { forecastData: null }     
    }

    renderForcastItemDays(){
        return <h1>Render Items</h1>;
       /* return days.map( day => (<ForcastItem weekDay={day} hour={10} data={data}></ForcastItem>));*/
    }

    componentDidMount() {
        //fe tch or axios 
        const url_forcast = `${url}?q=${this.props.city}&appid=${api_key}`;
        
        fetch(url_forcast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData =  transformForecast(weather_data);
                this.setState({ forecastData });  
                    
            }
        ); 
    }

    renderProgress = () => {
        return <h3>Cargando Pronostico estendido</h3>;
    }
    render() {
        const { city } = this.props;  
        const { forecastData } = this.state;
    return (
        <div>
            <h2 className='forecast-title'>Pronostico Extendido para: { city }</h2>
            {forecastData ?
                this.renderForcastItemDays():
                this.renderProgress()}
        </div>
        );
    }
}

ForecastExteded.propTypes = {
        city: PropTypes.string.isRequired,
}

export default ForecastExteded;  