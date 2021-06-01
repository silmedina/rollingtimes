import React, { useState } from "react";
import { Container, Form, Button, Col, Card } from "react-bootstrap";
import {
  validarNombre,
  validarEmail,
  validarTextArea,
  validarConsulta,
} from "../Validaciones";
import Iframe from "react-iframe";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");

  const sendMail = (e) => {
    emailjs
      .sendForm(
        "service_75i9wjj",
        "template_55r1v1h",
        e.target,
        "user_Y41fnJgv1nj4ow0DJZfmZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire(
            "Bien hecho!",
            "El mensaje se envio correctamente!",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
          mensajeError();
        }
      );
  };

  const mensajeError = () => {
    Swal.fire(
      "Error!",
      "Algun campo esta incompleto o escribo erroneamente!",
      "error"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validarNombre(nombre) &&
      validarEmail(email) &&
      validarTextArea(textArea) &&
      validarConsulta(tipoConsulta)
    ) {
      sendMail(e);
      e.target.reset();
    } else {
      mensajeError();
    }
  };

  return (
    <Container className="my-5">
      <Form.Row className="d-flex row justify-content-center">
        <h2 className="text-center mb-3">¿Como contactarnos?</h2>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4233.6870551495285!2d-65.2094817776788!3d-26.837017462470826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1622330168946!5m2!1ses-419!2sar"
          width="900"
          height="300"
          className="mb-5 mt-3 border border-dark"
          allowfullscreen=""
          loading="lazy"
        ></Iframe>
      </Form.Row>
      <Form.Row>
        <Col className="mr-4">
          <h2 className="text-center text-primary">Mensajes y consultas</h2>
          <p>Complete el formulario para enviar su consulta y/o sugerencia.</p>({" "}
          <span className="text-danger">*</span> ) CAMPOS OBLIGATORIOS
          <Form className="mt-3" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>
                <span className="text-danger">*</span> Nombre Completo
              </Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Matias Rodriguez"
                onChange={(e) => setNombre(e.target.value)}
                minLength={6}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span className="text-danger">*</span> Email
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span className="text-danger">*</span> Categorias
              </Form.Label>
              <Form.Control
                name="tipoConsulta"
                as="select"
                onChange={(e) => setTipoConsulta(e.target.value)}
                required
              >
                <option></option>
                <option>Noticias guardadas</option>
                <option>Problemas con la web</option>
                <option>Funcionalidades de la web</option>
                <option>Información erronea</option>
                <option>Otros</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <span className="text-danger">*</span> Escriba su consulta
                (Entre 10 a 250 caracteres)
              </Form.Label>
              <Form.Control
                name="textArea"
                as="textarea"
                rows={4}
                onChange={(e) => setTextArea(e.target.value)}
                minLength={10}
                maxLength={250}
                required
              />
              <small>Le contestaremos a la brevedad</small>
            </Form.Group>
            <Button type="submit" variant="primary" className="w-50 my-4">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col>
          <article>
            <div className="d-flex row justify-content-center">
              <Card border="dark" style={{ width: "23rem" }}>
                <Card.Header className="text-center">***LOGO***</Card.Header>
                <Card.Body>
                  <h4 className="text-primary">Casa Central</h4>
                  <div className="pb-3">
                    <strong>Gral. Paz 547 - San Miguel de Tucumán</strong>
                  </div>
                  <h4 className="text-primary">Telefono de contacto</h4>
                  <div className="pb-3">
                    <small>Enviá tu denuncia a nuestra linea exclusiva</small>
                    <p className="my-1">
                      <strong>+54 9 (381) - 3242 445</strong>
                    </p>
                    <small>
                      La información será evaluada y en caso de publicarse se
                      protegerá tu identidad
                    </small>
                  </div>
                  <h4 className="text-primary">Correo de contacto</h4>
                  <div className="pb-3">
                    Para publicitar en la web:
                    <p>
                      <strong>example@gmail.com</strong>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div>
              <h6 className="text-center my-4">
                También te sugerimos visitar
                <a href="/"> Preguntas Frecuentes</a>
              </h6>
              <span></span>
            </div>
          </article>
        </Col>
      </Form.Row>
    </Container>
  );
};
export default Contact;
