import React from 'react';
import PropTypes from 'prop-types';

const ForcastItem = ({ weekDay }) => (
    <div>
        { weekDay }
    </div>
);

ForcastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
}

export default ForcastItem;