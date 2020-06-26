import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) =>  (
    <div className="watherExtraInfoCont">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`}</span>
    </div>
);

WeatherExtraInfo.propType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;