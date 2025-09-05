import React from 'react';
import './App.css';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
import { toCelsius, toFahrenheit, tryConvert } from './utils';  
import { useState } from 'react';
function App() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setScale('c');
        setTemperature(temperature);
    };

    const handleFahrenheitChange = (temperature) => {
        setScale('f');
        setTemperature(temperature);
    };
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div className="App">
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default App;
