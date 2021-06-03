import React, { Fragment, useState, useEffect } from 'react';
import LogoNav from './img/LogoNav.png';
import { Nav } from 'react-bootstrap';
import Climate from './Climate';


const Logo = () => {
    const [clima, setClima] = useState({})
    const ciudad = 'san Miguel de Tucuman';
    const getCiudad = ciudad.replace(/ /g, "%20").toLowerCase();
    const pais = 'argentina';
    const getPais = pais.replace(/ /g, "%20").toLowerCase();
    // CambiarKE-------------------------------------------------------------------------------------------
    const URL_Clima = `http://api.openweathermap.org/data/2.5/weather?q=${getCiudad},${getPais}&appid=70bea3ec52e1948d8099a3d90fe8f150&units=metric`;

    //    Clima 

    useEffect(() => {
        ejecutarClima();
    }, []);

    const ejecutarClima = async () => {
        const respuesta = await fetch(URL_Clima);
        const data = await respuesta.json();
        // console.log(data);
      setClima(data);
    }
    // console.log(clima);

    return (
        <Nav className=' bg5 px-5 py-3'>
            <div className='mr-auto'>
                <img src={LogoNav} alt="logo" />
            </div>
            <div>
                {/* <div>
                <input type="text" placeholder="ciudad"/>
                <input type="text" placeholder="pais" />
                <button>Buscar</button>
                </div> */}
                <Climate clima = {clima}/>
            </div>
        </Nav>

    );
};

export default Logo;