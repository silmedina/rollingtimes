import React from 'react';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import LogoNav from './img/LogoNav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Categorias from './Categorias';
import Logo from './Logo'
import { useMediaQuery } from 'react-responsive';


const Navegacion = () => {
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (

        <div>

            <Default>
                <Navbar className="bg5">
                    <Form inline className='mr-auto'>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className='' variant="outline-dark"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button>
                    </Form>
                    <Nav className=''>
                        <Button className='mx-2 my-1' variant='outline-dark'>Ingresar <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Button>
                        <Button className='mx-2 my-1' variant='outline-dark'>Suscribite</Button>
                    </Nav>
                </Navbar>
                <Logo/>
                <Categorias/>
            </Default>

            <Mobile>
                <Navbar ollapseOnSelect expand="lg" bg="" className="bg5">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* Colocar bandera cuando el dispositivo es sm muestra imagen*/}

                    <div className='mr-2'>
                        <img src={LogoNav} alt="logo" />
                    </div>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form >
                            <Form.Control type="text" placeholder="Buscar" className="mr-2" />
                            <Button className='my-2' variant="outline-dark">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </Button>
                        </Form>
                        <Nav className="ml-5 mr-auto dark">
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
        </div>
    );
};

export default Navegacion;