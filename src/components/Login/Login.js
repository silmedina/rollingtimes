import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormularioLog from "./FormularioLog";

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="text-center pb-4">
            <Button
              className="btn btn-outline-secondary text-light"
              onClick={handleShow}
            >
              Iniciar Sesión
            </Button>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Inicio de sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormularioLog />
            </Modal.Body>
          </Modal>
        </div>
    );
};

export default Login;