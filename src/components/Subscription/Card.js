import React, { useState } from "react";
import cardlogo from "../../assets/card-logo.png";
import { Modal, Button } from "react-bootstrap";
import Formu from "./FormularioM";

const Card = (attribute) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <div className="p-1">
        <div className="card-body text-center">
          <img src={cardlogo} alt="cardlogo.png" className="px-5"></img>
        </div>
        <h3 className="card-title text-center">{attribute.title}</h3>
        <h4 className="text-center pt-2">{attribute.precio}</h4>
        <div className="p-3">
          <h6>Beneficios</h6>
          <p className="card-text text-secondary">{attribute.texto}</p>
          <div className="text-center pb-4">
            <Button
              className="btn btn-outline-secondary text-light"
              onClick={handleShow}
            >
              Suscribirme
            </Button>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Suscripcion RollingTimes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formu />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Card;
