import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { validarEmail } from "../Validaciones";
import Swal from "sweetalert2";
import "./Login.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(null);
  let token = '';
  let role = '';
  const desloguear = () => {
    Swal.fire({
      title: "Estas seguro que quieres desconectarte?",
      showDenyButton: true,
      confirmButtonText: `Desloguear`,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Te deslogueaste exitosamente!", "", "success");
        setLog(false);
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validarEmail(email)) {
      try {
        const loginComparacion = {
          email,
          password,
          token,
          role
        };
        
        const configuracion = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginComparacion)
        }
        
        const respuesta = await fetch("http://localhost:4001/api/login/", configuracion);

        console.log(respuesta);
        console.log(loginComparacion);


        if (respuesta.status === 200) {
          Swal.fire(
            "Bienvenido administrador!",
            "El inicio de sesion se realizo correctamente!",
            "success"
          );
          setAdmin(true);
          handleClose();
          setLog(true);
        } else {
          if (respuesta.status === 201) {
            console.log("Paso por aqui 201");
            Swal.fire(
              "Bien hecho!",
              "El inicio de sesion se realizo correctamente!",
              "success"
            );
            handleClose();
            setLog(true);
          } else {
            if (respuesta.status === 301) {
              Swal.fire("Error", "Usuario y/o Password incorrecto!", "error");
            } else {
              Swal.fire("Error", "Usuario y/o Password incorrecto!", "error");
            }
          }
        }
      } catch (error) {
        console.log(error);
        Swal.fire(
          "Error",
          "Por algun motivo no se pudo iniciar sesion correctamente!",
          "error"
        );
      }
    } else {
      Swal.fire("Error", "El usuario o contraseña no coinciden", "error");
    }
  };

  return (
    <div>
      <div className="text-center d-flex">
        {log ? (
          <div className="d-flex">
            {admin ? (
              <div>
                <Link to="/categorias">
                  <Button className="mx-2 my-1" variant="outline-dark">
                    Panel de Control Categorias
                  </Button>
                </Link>
                <Link to="/noticias">
                  <Button className="mx-2 my-1" variant="outline-dark">
                    Panel de Control Noticias
                  </Button>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            <Button
              className="mx-2 my-1"
              onClick={desloguear}
              variant="outline-dark"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              className="mx-2 my-1"
              onClick={handleShow}
              variant="outline-dark"
            >
              Ingresar <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </Button>
            <Link to={"/suscripcion"}>
              <Button className="mx-2 my-1" variant="outline-dark">
                Suscribite
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      <Modal show={show} onHide={handleClose} keyboard={false} className="px-0">
        <Modal.Body className="p-0">
          <h3 className="text-center login-title">Inicio de Sesión</h3>
          <Form onSubmit={handleSubmit}>
            <h5 className="text-center mx-1 py-2 h5-titulo my-0">
              <i className="pl-1 titulo-secundario i-titulo">
                Ingresa con tus redes sociales
              </i>
            </h5>
            <div className="my-4">
              <Col className="text-center m-2">
                <Link to="/error404">
                  <button className="boton-facebook" onClick={handleClose}>
                    <FaFacebookF className="mb-1 mr-2" />
                    Facebook
                  </button>
                </Link>
              </Col>
              <Col className="text-center m-2">
                <Link to="/error404">
                  <button className="boton-google" onClick={handleClose}>
                    <FaGoogle className="mb-1 mr-2" />
                    Google
                  </button>
                </Link>
              </Col>
            </div>

            <h5 className="text-center mx-1 py-2 h5-titulo ">
              <i className="pl-1 titulo-secundario i-titulo">
                Ingresa con tus credenciales
              </i>
            </h5>
            <Form.Row className="mx-4">
              <Col>
                <Form.Group>
                  <div className="col-login">
                    <input
                      className="effect-input input-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      minLength={10}
                      maxLength={40}
                      required
                    />
                    <span className="focus-border"></span>
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="col-login">
                    <input
                      className="effect-input input-password"
                      name="password"
                      type="password"
                      placeholder="Contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={4}
                      maxLength={20}
                      required
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="mt-2">
                    <Link
                      className="mx-1 pt-1 outline-dark"
                      to={`/error404`}
                      size="small"
                      onClick={handleClose}
                    >
                      Olvidé mi contraseña
                    </Link>
                  </div>
                </Form.Group>
              </Col>
            </Form.Row>
            <div className="text-center p-3">
              <button className="mx-2 my-1 bg2 button-send-close" type="submit">
                Enviar
              </button>
              <button
                className="mx-2 my-1 background-black button-send-close"
                onClick={handleClose}
              >
                Cerrar
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
