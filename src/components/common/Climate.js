import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'


const Climate =  (props) => {
    console.log(props);

    const ciudad = props.clima.name;
    const pais = props.clima.sys && props.clima.sys.country;
    const descripcion = props.clima.weather && props.clima.weather[0].description;
    const icono = props.clima.weather && props.clima.weather[0].icon; 
    const temperatura = props.clima.main && props.clima.main.temp;
    const minTemp = props.clima.main && props.clima.main.temp_min;
    const maxTemp = props.clima.main && props.clima.main.temp_max;
    const humedad = props.clima.main && props.clima.main.humidity;

    return (
        <div className="container">
            <div className="cards">
             <p>{ciudad}, {pais}</p>
            {/* icon  */}

            <h5 className="">{temperatura}°C - {descripcion}</h5>
            {/* <p>Min: {minTemp}°C - Max: {maxTemp}°C </p> */}
            {/* <p>Humedad: {humedad} </p>  */}
            </div>
        </div>
    );
};

export default Climate;