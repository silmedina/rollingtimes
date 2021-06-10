import React, { Fragment, useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import LogoNav from "./img/LogoNav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import logoSm from "./img/logoSm.png";
import Categoria from "./Categoria.js";
import Cotizacion from "./Cotizacion";
import Logo from "./Logo";
import Menudespleg from "./Menudespleg";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

const Navegacion = (props) => {
  const [compactNav, setcompactNav] = useState(false);
  const cambiarNav = () => {
    const nuevaClaseExpa = document.getElementById("navExpand");
    if (window.screen.width > 992 && window.scrollY > 250) {
      if (nuevaClaseExpa) {
        nuevaClaseExpa.style.display = "none";
        setcompactNav(true);
      }
    } else if (window.screen.width > 992 && window.scrollY <= 5) {
      if (nuevaClaseExpa) {
        nuevaClaseExpa.style.display = "inline";
      }
      setcompactNav(false);
    }
  };
  window.addEventListener("scroll", cambiarNav);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 991 });
    return isMobile ? children : null;
  };

  const home = () => {
    props.history.push("/");
    cambiarNav();
  }

  return (
    <Fragment>
      <Desktop>
        <div
          className="d-flex row justify-content-center sticky-top m-0"
          id="navDesk"
        >
          <div className="bg3" id="navDesk">
            <Navbar collapseOnSelect expand="lg" className="bg5">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              {compactNav === true ? (
                <Menudespleg categorias={props.categorias} />
              ) : null}
              {compactNav === true ? (
                <img className="mr-3 logo-icono-mano" src={logoSm} alt="logo" onClick={()=>home()} />
              ) : null}
              <Form inline className="m-3">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button className="" variant="outline-dark" href="*">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </Button>
              </Form>
              <Nav className="ml-auto">
                <Login />
              </Nav>
            </Navbar>
            <div className="" id="navExpand">
              <Logo clima={props.clima} />
              <Cotizacion
                dolar={props.dolar}
                euro={props.euro}
                real={props.real}
              />
              <Categoria categorias={props.categorias} />
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg=""
          className="d-flex row justify-content-center bg5 stiky-top p-0 m-0"
        >
          <div className="text-center">
            <img src={LogoNav} alt="logo" className="w-75 p-2" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <div className="text-center">
                <Form className="d-flex pt-3 w-100 px-3">
                  <Form.Control
                    type="text"
                    placeholder="Buscar"
                    className="mr-1"
                  />
                  <Button variant="outline-dark">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </Button>
                </Form>
              </div>
              <hr />
              <Nav className="ml-5 mr-5 dark">
                {props.categorias.map((categoria) => (
                  <Nav.Link href="/">{categoria.nombre}</Nav.Link>
                ))}
              </Nav>
              <Nav>
                <div className="d-flex row justify-content-center">
                <Login />
                </div>
                
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Mobile>
    </Fragment>
  );
};

export default withRouter(Navegacion);
