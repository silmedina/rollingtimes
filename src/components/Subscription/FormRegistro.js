import React, { useState } from "react";
import { Container, Form, Button, Col, Modal } from "react-bootstrap";
import {
  validarNombre,
  validarApellido,
  validarDireccion,
  validarLocalidad,
  validarPostal,
  validarTelefono,
  validarEmail,
} from "../Validaciones";
import Swal from 'sweetalert2'

const FormRegistro = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [terminos, setTerminos] = useState(false);
  //const [formularioValido, setFormularioValido] = useState(null);

  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked);
  };

  const hideModal = () => {
    if (
      validarNombre(nombre) &&
      validarApellido(apellido) &&
      validarDireccion(direccion) &&
      validarLocalidad(localidad) &&
      validarEmail(email) &&
      validarTelefono(telefono) &&
      validarPostal(postal) &&
      terminos
    ) {
      props.onHide();
    }
    else{
        
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validarNombre(nombre) &&
      validarApellido(apellido) &&
      validarDireccion(direccion) &&
      validarLocalidad(localidad) &&
      validarEmail(email) &&
      validarTelefono(telefono) &&
      validarPostal(postal) &&
      terminos
    ) {
        Swal.fire(
            "Bien hecho!",
            "La suscripcion se realizo correctamente!",
            "success"
          );
    } else {
        //setFormularioValido(false);
    }
  };

  return (
    <div>
      <Container>
        <Modal {...props} keyboard={false} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Suscripcion RollingTimes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Nombre
                    </Form.Label>
                    <Form.Control
                      name="nombre"
                      type="text"
                      placeholder="Matias Francisco"
                      onChange={(e) => setNombre(e.target.value)}
                      minLength={3}
                      maxLength={15}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Apellido
                    </Form.Label>
                    <Form.Control
                      name="apellido"
                      type="text"
                      placeholder="Rodriguez"
                      onChange={(e) => setApellido(e.target.value)}
                      minLength={3}
                      maxLength={20}
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Localidad
                    </Form.Label>
                    <Form.Control
                      name="localidad"
                      type="text"
                      placeholder="San Miguel de Tucumán"
                      onChange={(e) => setLocalidad(e.target.value)}
                      minLength={4}
                      maxLength={40}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Dirección
                    </Form.Label>
                    <Form.Control
                      name="direccion"
                      type="text"
                      placeholder="Gral. Paz 547"
                      onChange={(e) => setDireccion(e.target.value)}
                      minLength={4}
                      maxLength={40}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Correo Electronico
                    </Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="rollingnews.contacto@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      minLength={10}
                      maxLength={30}
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Telefono (Sin
                      espacios)
                    </Form.Label>
                    <Form.Control
                      name="telefono"
                      type="text"
                      placeholder="3813242445"
                      onChange={(e) => setTelefono(e.target.value)}
                      minLength={7}
                      maxLength={14}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      <span className="text-danger">*</span> Postal
                    </Form.Label>
                    <Form.Control
                      name="postal"
                      type="text"
                      placeholder="4000"
                      onChange={(e) => setPostal(e.target.value)}
                      minLength={4}
                      maxLength={4}
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Check
                  name="terminos"
                  type="checkbox"
                  label="Acepto los terminos y condiciones"
                  onChange={onChangeTerminos}
                  checked={terminos}
                  required
                ></Form.Check>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={hideModal}>
                Enviar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default FormRegistro;