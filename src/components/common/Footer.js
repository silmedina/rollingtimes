import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import logoSm from "./img/logoSm.png";
import { FaPhone } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <header className="bg5 d-flex row m-0 p-0">
        <div className="col-sm-12 col-md-12 d-flex row justify-content-center p-0 m-0">
          <div>
            <a
              className="mx-2 my-3 color1"
              style={{ fontSize: "30px" }}
              href="#"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              className="mx-2 my-3 color1"
              href=""
              style={{ fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a
              className="mx-2 my-3 color1"
              href=""
              style={{ fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a
              className="mx-2 my-3 color1"
              href=""
              style={{ fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
        </div>
        
      </header>
      <section className="bg5 d-flex row justify-content-center m-0 p-0 text-center">
      <div className="col-sm-12 col-md-6 col-lg-4 my-3 p-0 mx-0 text-center align-self-center">
          <img src={logoSm} alt="logo" className="w-75 p-0" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-0 m-0">
          <Link className="mx-1 outline-dark" to={"/about"}>
            <h4 className="m-0 color2">Sobre Nosotros</h4>
          </Link>
        <div className="px-2">
            <p className="mb-4">Somos una pequeña empresa argentina dedicada al diario digital en estos tiempos de pandemia, lo que es fundamental poder mantener a todos los argentinos informados del dia a dia.</p>
        </div>
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-4 p-0 m-0">
          <a className="color1" href="#">
            <h4 className="pb-1 color2 pt-4">Contacto</h4>
          </a>
          <div>
            <strong>
              <MdLocationOn className="mb-1 mr-2" />
              Gral. Paz 547 - San Miguel de Tucumán
            </strong>
          </div>
          <p className="my-3">
            <strong>
              <FaPhone className="mb-1 mr-2" />
              +54 9 (381) - 3242 445
            </strong>
          </p>
          <p>
            <strong>
              <MdEmail className="mb-1 mr-2" />
              rollingnews-contacto@gmail.com
            </strong>
          </p>
        </div>
      </section>
      <footer className="text-center bg5 m-0 pt-2 ">
        <p className="pb-3 m-0">&copy; Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Footer;
