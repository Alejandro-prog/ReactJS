import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForcastItem from './ForcastItem';

class ForecastExteded extends Component {
    render() {
        const { city } = this.props;  

    return (
        <div>
            <h2 className='forecast-title'>Pronostico Extendido para:{ city }</h2>
            <ForcastItem></ForcastItem>
        </div>
        );
    }
}

ForecastExteded.propTypes = {
        city: PropTypes.string.isRequired,
}

export default ForecastExteded;  