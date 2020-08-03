import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForcastItem from './ForcastItem';
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
class ForecastExteded extends Component {
 
    constructor(){
        super();
        this.state = { forecastData: null }     
    }
    renderForcastItemDays(){
        return "Render Items";
       /* return days.map( day => (<ForcastItem weekDay={day} hour={10} data={data}></ForcastItem>));*/
    }

    renderProgress = () => {
        return "Cargando Pronostico estendido";
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