import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import LogoNav from './img/LogoNav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';
import logoSm from './img/logoSm.png';
import Categoria from './Categoria.js';
import Cotizacion from './Cotizacion';
import Logo from './Logo';
import Menudespleg from './Menudespleg';
import { Link } from "react-router-dom";

const Navegacion = () => {
    const [compactNav, setcompactNav] = useState(false);

    const cambiarNav = () => {
        if (window.scrollY >= 20) {
            setcompactNav(true);
        } else {
            setcompactNav(false);
        }
    }
    window.addEventListener('scroll', cambiarNav)

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ minWidth: 350, maxWidth: 991 })
        return isMobile ? children : null
    } 


    return (
        <Fragment>
            <Desktop>
                <div className="d-flex flex-column">
                    <Navbar collapseOnSelect expand="lg" className="bg5" id='navBlock' >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        {(compactNav === true) ? (<Menudespleg/>) : (null)}

                        {(compactNav === true) ? (<img className='mr-3' src={logoSm} alt="logo" />) : (null)
                        }
                        <Form inline className=''>
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className='' variant="outline-dark"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button>
                        </Form>
                        <Nav className='ml-auto'>
                            <Button className='mx-2 my-1' variant='outline-dark'>Ingresar <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Button>
                            {/* <Button className='mx-2 my-1' variant='outline-dark'>Suscribite</Button> */}
                            <Link
                                className="btn mx-2 my-1 outline-dark"
                                to={`/suscripcion`}
                                >Suscribite
                            </Link>
                        </Nav>
                    </Navbar>
                    <div>
                        {(compactNav === false) ? (<Logo/>) : (null)}
                        {(compactNav === false) ? (<Cotizacion />) : (null)}
                        {(compactNav === false) ? (<Categoria />) : (null)}
                    </div>
                </div>
            </Desktop>

            <Mobile>
                <Navbar collapseOnSelect expand="lg" bg="" className="bg5">
                    <div className='mr-2'>
                        <img src={LogoNav} alt="logo" />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form >
                            <Form.Control type="text" placeholder="Buscar" className="mr-2" />
                            <Button className='my-2' variant="outline-dark">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </Button>
                        </Form>
                        <Nav className="ml-5 mr-5 dark">
                            <Nav.Link href="#ultimo">Ultimo Momento</Nav.Link>
                            <Nav.Link href="#politica">Política</Nav.Link>
                            <Nav.Link href="#economia">Economía</Nav.Link>
                            <Nav.Link href="#sociedad">Sociedad</Nav.Link>
                            <Nav.Link href="#mundo">Mundo</Nav.Link>
                            <Nav.Link href="#deportes">Deportes</Nav.Link>
                            <Nav.Link href="#espetaculos">Espetáculos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className='mx-2 my-1' variant='outline-dark'>Ingresar <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Button>
                            <Button className='mx-2 my-1' variant='outline-dark'>Suscribite</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Mobile>
        </Fragment>
    );
};

export default Navegacion;