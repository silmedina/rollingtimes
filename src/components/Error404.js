import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faHome, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import error404 from "../assets/error404.gif";

const Error404 = () => {
  return (
    <Container className="text-center pt-lg-5 pb-lg-5">
         <Image src={error404} roundedCircle width={300} alt="Error 404"/>
      <h1 className="text-center mt-lg-5 mb-lg-5">Pagina no encontrada</h1>
      <h5 className="text-center">Disculpa, esta pagina no esta disponible</h5>
      <h6 className="text-center mb-lg-4">
        Error 404: la direccion ingresada no es correcta
      </h6>
      <Link className="text-center" to={`/contacto`}>
        <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon> Reportar
        enlace
      </Link>{" "}
      |{" "}
      <Link className="text-center" to={`/`}>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Ir al Inicio
      </Link>
    </Container>
  );
};

export default Error404;
