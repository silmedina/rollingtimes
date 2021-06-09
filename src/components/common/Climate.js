import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import'weather-icons/css/weather-icons.css'


const Climate =  (props) => {

    // console.log(props);

    const ciudad = props.clima.name;
    const pais = props.clima.sys && props.clima.sys.country;
    const descripcion = props.clima.weather && props.clima.weather[0].description;
    const icono = props.clima.weather && props.clima.weather[0].icon; 
    const temperatura = props.clima.main && props.clima.main.temp;
    const minTemp = props.clima.main && props.clima.main.temp_min;
    const maxTemp = props.clima.main && props.clima.main.temp_max;
    const humedad = props.clima.main && props.clima.main.humidity;

    // const iconW = icono;
    let output = '';

    switch (icono) {
        case '01d':
         output += 'wi-day-sunny';
          break;
        case '02d':
            output += 'wi-day-cloudy';
          break;
        case '03d':
            output += 'wi-cloud';
          break;
        case '04d':
            output += 'wi-cloudy';
          break;
        case '09d':
            output += 'wi-rain';
            break;
            case '10d':
                output += 'wi-day-sleet';
          break;
        case '11d':
            output += 'wi-day-snow-thunderstorm';
          break;
        case '13d':
            output +='wi-snow';
            break;
        case '50d':
            output += 'wi-day-haze';
          break;
        default:
          console.log(icono);
      }
console.log(output);
    return (
        <div className="container">
            <div className="cards">
             <p>{ciudad}, {pais}</p>
            {/* icon  */}
            <h3><i className={`wi ${output}`}></i></h3>
            <h5 className="">{temperatura}°C</h5>
            {/* <p>Min: {minTemp}°C - Max: {maxTemp}°C </p> */}
            {/* <p>Humedad: {humedad} </p>  */}
            </div>
        </div>
    );
};

export default Climate;