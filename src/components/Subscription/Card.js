import React, { useState } from "react";
import cardlogo from "../../assets/card-logo.png";
import { Button } from "react-bootstrap";
//import FormularioReg from "./FormularioReg";
import FormRegistro from "./FormRegistro";

const Card = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="card">
      <div className="p-1">
        <div className="card-body text-center">
          <img src={cardlogo} alt="cardlogo.png"></img>
        </div>
        <h3 className="card-title text-center">{props.title}</h3>
        <h4 className="text-center pt-2">{props.precio}</h4>
        <div className="p-3">
          <h6>Beneficios</h6>
          <p className="card-text text-secondary">{props.texto}</p>
          <div className="text-center pb-4">
            <Button
              className="btn btn-outline-secondary text-light"
              onClick={() => setModalShow(true)}
            >
              Suscribirme
            </Button>
          </div>
          <FormRegistro show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
