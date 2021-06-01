import React, { Fragment, useState, useEffect } from 'react';
import LogoNav from './img/LogoNav.png';
import { Nav } from 'react-bootstrap';



const Logo = () => {
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