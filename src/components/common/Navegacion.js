import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';
import LogoNav from './img/LogoNav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';
import logoSm from './img/logoSm.png';


const Navegacion = () => {
    const [showLogo, setShowLogo] = useState(false);
    const [showDrop, setShowDrop] = useState(false);
   
    const cambiarNav = () => {
        if (window.scrollY >= 20) {
            setShowLogo(true);
            setShowDrop(true);
        } else {
            setShowLogo(false);
            setShowDrop(false);
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
                <Navbar collapseOnSelect expand="lg" className="bg1 fixed-top"  >
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {(showLogo === true) ? (<img className='mr-3' src={logoSm} alt="logo" />) : (null)
                    }
                    <Form inline className='mr-2'>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className='' variant="outline-dark"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button>
                    </Form>
                    {(showDrop === true) ?
                        (<NavDropdown className="color1 mr-auto" title="Categorias" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.2">Ultimo Momento</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.3">Política</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.4">Economía</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.5">Sociedad</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.6">Mundo</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.7">Deportes</NavDropdown.Item><hr />
                            <NavDropdown.Item href="#action/3.8">Espectáculos</NavDropdown.Item><hr />
                        </NavDropdown>) :
                        (<Nav variant="tabs" defaultActiveKey="/home" className='bg5 mr-auto'>
                            <Nav.Item>
                                <Nav.Link className='color1' href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-1">Ultimo Momento</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-2">Política</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-3">Economía</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-4">Sociedad</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-5">Mundo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-6">Deportes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='color1' eventKey="link-7">Espectáculos</Nav.Link>
                            </Nav.Item>
                        </Nav>)
                    }


                    {/* --Aqui agregar api del clima -------------------------------------------------------------------------------------*/}
                    <Nav className=''>
                        <Button className='mx-2 my-1' variant='outline-dark'>Ingresar <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Button>
                        <Button className='mx-2 my-1' variant='outline-dark'>Suscribite</Button>
                    </Nav>
                </Navbar>
            </Desktop>

            <Mobile>
                <Navbar collapseOnSelect expand="lg" bg="" className="bg5">
                    <div className='mr-2'>
                        <img src={LogoNav} alt="logo" />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Form >
                            <Form.Control type="text" placeholder="Buscar" className="mr-2"/>
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