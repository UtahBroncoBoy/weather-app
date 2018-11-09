import React from 'react';

const Weather = props => (
        <div className='weather'>
            {props.city && props.country && props.temperature && props.humidity && props.description &&
                <div className='alert alert-light'>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temperature}&#176; F</p>
                    <p>Humidity: {props.humidity}&#37;</p>
                    <p>Conditions: {props.description}</p>
                </div>  
            }
            {props.error && <p className='alert alert-danger'>{props.error}</p>}
        </div>
    )

export default Weather;
