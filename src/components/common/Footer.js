import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import logoSm from './img/logoSm.png';



const Footer = () => {
    
    return (
        <Fragment>
                <header className='bg4 d-flex  align-items-center'>
                    <div className='col-sm-12 col-md-5'>
                        <div>
                            <a className='mx-2 my-3 color1' style={{ fontSize: '30px' }} href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a className='mx-2 my-3 color1' href="" style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                            <a className='mx-2 my-3 color1' href="" style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                            <a className='mx-2 my-3 color1' href="" style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                        </div>
                    </div>
                    <div className='col-sm-none col-md-7 my-3'>
                        <img src={logoSm} alt="logo" />
                    </div>
                </header>
                <main className='bg4 d-flex justify-content-between align-items-center py-5'>
                        <div className='col-sm-6 col-md-4' >
                           <a className='color5' href="#"><h4>Sobre Nosotros</h4></a> 
                        </div>
                        <div className=' col-sm-6 col-md-4'>
                            <a className='color5' href="#"><h4>Contacto</h4></a>
                        </div>
                </main>
                <footer className='text-center bg4 m-0'>
                    <h5>&copy; Todos los derechos reservados</h5>
                </footer>
        </Fragment>
    );
};

export default Footer;