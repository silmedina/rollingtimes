import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import logoSm from './img/logoSm.png';



const Footer = () => {
    
    return (
        <div>
            <header className='bg5 d-flex row m-0 p-0'>
                    <div className='col-sm-12 col-md-6 d-flex row justify-content-center p-0 m-0'>
                        <div>
                            <a className='mx-2 my-3 color1' style={{ fontSize: '30px' }} href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a className='mx-2 my-3 color1' href="" style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                            <a className='mx-2 my-3 color1' href="" style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                            <a className='mx-2 my-3 color1' href="" style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                        </div>
                    </div>
                    <div className='col-sm-none col-md-7 my-3 p-0 mx-0 text-center'>
                        <img src={logoSm} alt="logo" className="w-75 p-0"/>
                    </div>
                </header>
                <section className='bg5 d-flex row justify-content-center py-5 m-0 px-0 text-center'>
                        <div className='col-sm-6 col-md-6 p-0 m-0' >
                           <a className='color1' href="#"><h4>Sobre Nosotros</h4></a> 
                        </div>
                        <div className=' col-sm-6 col-md-6 p-0 m-0'>
                            <a className='color1' href="#"><h4>Contacto</h4></a>
                        </div>
                </section>
                <footer className='text-center bg5 m-0 p-0'>
                    <p>&copy; Todos los derechos reservados</p>
                </footer>
        </div>
    );
};

export default Footer;