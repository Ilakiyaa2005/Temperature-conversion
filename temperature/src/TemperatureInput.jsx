import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input
                value={temperature}
                onChange={e => onTemperatureChange(e.target.value)}
            />
        </fieldset>
    );
}

export default TemperatureInput;