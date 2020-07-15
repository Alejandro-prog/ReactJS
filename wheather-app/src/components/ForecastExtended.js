import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForcastItem from './ForcastItem';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

class ForecastExteded extends Component {

    renderForcastItemDays(){
        return days.map( day => (<ForcastItem weekDay={day}></ForcastItem>));
    }

    render() {
        const { city } = this.props;  

    return (
        <div>
            <h2 className='forecast-title'>Pronostico Extendido para: { city }</h2>
            {this.renderForcastItemDays()}
        </div>
        );
    }
}

ForecastExteded.propTypes = {
        city: PropTypes.string.isRequired,
}

export default ForecastExteded;  