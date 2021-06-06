import React, { Fragment } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';




const Categoria = () => {
    return (
        <Fragment>
            <Nav variant="tabs" defaultActiveKey="/home" className='bg5 px-5 d-flex justify-content-center' id='nav'>
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
            </Nav>
        </Fragment>
    );
};

export default Categoria;