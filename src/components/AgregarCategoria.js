import React, { useState } from "react";
import { Button, Alert, Form, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams, withRouter } from "react-router-dom";
import { validarNombreCategoria } from "./Validaciones";

const AgregarCategoria = (props) => {
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const URL = process.env.REACT_APP_URL_CATEGORIA;

  const handleSudmit = async (e) => {
    e.preventDefault();

    const validacionCategoriaResult = validarNombreCategoria(nombreCategoria);

    if (validacionCategoriaResult.esValido) {
      setError(false);
      try {
        const categoriaNueva = {
          nombre: nombreCategoria.trim(),
        };

        const respuesta = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoriaNueva),
        });

        const informacion = await respuesta.json();

        if (respuesta.status === 201) {
          Swal.fire(
            "Categoria Creada",
            "La categoria se agrego con exito",
            "success"
          );

          props.consultarCategorias();
          props.history.push("/categorias");
        } else if (respuesta.status === 500){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: informacion.mensaje,
              });
        }
      } catch (error) {
         
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un error al crear la categoria",
        });
      }
    } else {
      setError(true);
      setMensajeError(validacionCategoriaResult.mensaje);
    }
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSudmit}>
        <h1 className="text-center my-5 categoria-titulo">Agregar nueva Categoria</h1>
        <Form.Group>
          <Form.Label className="categoria-texto">Nombre de Categoria*</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setNombreCategoria(e.target.value);
            }}
            maxLength='35'
          ></Form.Control>
        </Form.Group>
        <button
          className="w-100 my-5 background-orange button-send-close"
          type="submit"
        >Guardar</button>
        {error ? (
          <Alert variant="warning">
            {mensajeError}
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default withRouter(AgregarCategoria);
