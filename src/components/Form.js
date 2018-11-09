import React from 'react';

const Form = props => (
        <form onSubmit={props.getWeather}>
            <input type="text" name='city' placeholder='City or ZIP...' className='form-control-lg'/>
            <input type="text" name='country' placeholder='Country...' className='form-control-lg'/>
            <br />
            <button className='btn btn-primary'>Get Weather</button>
        </form>
    )

export default Form;

