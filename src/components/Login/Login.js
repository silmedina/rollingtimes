import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  validarEmail
} from "../Validaciones";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log=(email)

    if (
      validarEmail(email) 
      //&& validar password con bcryptjs 
    ) {
        Swal.fire(
            "Bien hecho!",
            "La suscripcion se realizo correctamente!",
            "success"
          );
    } else {
      Swal.fire(
        "Error!",
        "La suscripcion se realizo correctamente!",
        "error"
      );
    }

  }

  return (
    <div>
      <div className="text-center pb-4">
        <Button
          className="mx-2 my-1"
          onClick={handleShow}
          variant="outline-dark"
        >
          Ingresar <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> Inicio de Sesión </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Modal.Title className="text-center pb-3">
              Ingresa con tus redes sociales
            </Modal.Title>
            <Col className="text-center m-2">
              <Button variant="outline-primary">Facebook</Button>
            </Col>
            <Col className="text-center m-2">
              <Button variant="outline-danger">Google</Button>
            </Col>
            <Modal.Title className="text-center py-3 ">
              Ingresa con tus credenciales
            </Modal.Title>
            <Form.Row className="mx-4">
              <Col>
                <Form.Group>
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    minLength={10}
                    maxLength={40}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    minLength={4}
                    maxLength={20}
                    required
                  />
                  <div className="mt-2">
                    <Link
                      className="mx-1 pt-1 outline-dark"
                      to={`/error404`}
                      size="small"
                    >
                      Olvidé mi contraseña
                    </Link>
                  </div>
                </Form.Group>
              </Col>
            </Form.Row>
            <Button className="mx-2 my-1" variant="outline-success" type="submit">
            Enviar
          </Button>
          <Button
            className="mx-2 my-1"
            onClick={handleClose}
            variant="outline-dark"
          >
            Close
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
