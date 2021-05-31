import React, { Fragment, useState, useEffect } from 'react';
import LogoNav from './img/LogoNav.png';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { CLIMA_KEY } from './keys.js'



const Logo = () => {
    const [clima, setClima] = useState({});
    const [ciudad, setCiudad] = useState("san miguel de tucuman");
    const [pais, setPais] = useState("argentina");
   const CLIMA_KEY = "70bea3ec52e1948d8099a3d90fe8f150";

useEffect(() => {
    ejecutarClima();
  }, []);

const ejecutarClima = async() => {
    try{
        const respuesta = await fetch(`api.openweathermap.org/data/2.5/weather?q=san%20miguel%20de%20tucuman,argentina&appid=70bea3ec52e1948d8099a3d90fe8f150`);
        // console.log(respuesta);
        if(respuesta.status === 200){
        const informacion = await respuesta.json();
        // console.log(informacion);
        setClima(informacion)
    }

    }catch(error){
        console.log(error);
    }

    // console.log('carga');

    

}
window.addEventListener('load', ejecutarClima);
    

    // window.onload = async function ejecutarClima() 


    return (

        <Nav className=' bg5 px-5 py-3'>
            <div className='mr-auto'>
                <img src={LogoNav} alt="logo" />
            </div>
            <div>
                {/* Ciudad, provincia */}
                <h3> , </h3>
                {/* icon */}
                {/* temperatura actual */}
                <h5></h5>
                {/* temperaturas minima y max */}
                <p>Min: - Max: </p>
            </div>
        </Nav>

    );
};

export default Logo;