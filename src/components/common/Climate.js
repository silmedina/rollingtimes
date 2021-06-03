import React from 'react';

const Climate =  (props) => {
    console.log(props);
    const ciudad = props.clima.name;
    const pais = props.clima.sys && props.clima.sys.country;
    const descripcion = props.clima.weather && props.clima.weather[0].description;
    const temperatura = props.clima.main && props.clima.main.temp;
    const minTemp = props.clima.main && props.clima.main.temp_min;
    const maxTemp = props.clima.main && props.clima.main.temp_max;
    const humedad = props.clima.main && props.clima.main.humidity;
    return (
        <div>
             {/* Ciudad, provincia */}
             <h3> {ciudad},{pais} </h3>
            {/* icon  */}
             {/* temperatura actual  */}
            <h3>{temperatura}°C</h3>
            <h4>{descripcion}</h4>
            {/* temperaturas minima y max */}
            <h5>Min: {minTemp}°c - Max: {maxTemp}°C </h5>
            <p>Humedad: {humedad} </p> 
        </div>
    );
};

export default Climate;