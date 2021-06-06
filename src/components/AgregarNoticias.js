import React, { useState } from 'react';
import { Button, Alert, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useParams, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import { validarNombre, validarNombreCategoria, validarTextArea, validarUrlImagen } from "./Validaciones";


const Noticias = (props) => {
  const URLNOT = process.env.REACT_APP_URL_NOTICIAS;
  const [titular, setTitular] = useState("");
  const [Bajada, setBajada] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');


  // // const cambioCategoria = (e) => {
  // //   setCategoria(e.target.value);
  // // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validacion
    if (
      validarTextArea(titular) &&
            validarTextArea(bajada) &&
            validarTextArea(cuerpo) &&
            validarUrlImagen(imagen) &&
            validarNombreCategoria(categoria) &&
            validarNombre(autor)

    ) {
      // validacion falla, entonces mostrar un cartel de error
      setError(true);
    } else {
      setError(false);
      // si esta bien la validacion entonces agregar el producto en la API

      //crear el objeto que tengo que enviar a la API
  
      const noticia = {
        titular,
        Bajada,
        cuerpo,
        imagen,
        categoria,
        autor,
        fecha

      }
      console.log(noticia);
      //  enviar el request o solicitud POST

      try {
        //  codigo normal
        const configuracion = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(noticia)
        }

        const respuesta = await fetch(URLNOT, configuracion)
        console.log(respuesta)
        if (respuesta.status === 201) {
          // mostrar cartel de que se agrego el producto
          Swal.fire(
            'Noticia creada',
            'La noticia se agrego correctamente',
            'success'
          )
          props.consultarNoticias();
          }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Agregar Noticia</h1>
        {/* titular */}
        <Form.Group>
          <Form.Label>Titulo de Noticia (Titular)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un titulo"
            onChange={(e) => setTitular(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* bajada */}
        <Form.Group>
          <Form.Label>Descripcion breve (copete o bajada)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion breve"
            onChange={(e) => setBajada(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* cuerpo */}

        <Form.Group>
          <Form.Label>Cuerpo de la noticia</Form.Label>
          <Form.Control as="textarea"
            placeholder="Ingrese una descripcion detallada"
            onChange={(e) => setCuerpo(e.target.value)}

          ></Form.Control>
        </Form.Group>
        {/* imagen */}
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pegue la URL de la imagen"
          onChange={(e) => setImagen(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* categoria */}

        {/* autor */}
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del autor"
          onChange={(e) => setAutor(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la fecha"
          onChange={(e) => setFecha(e.target.value)}
          ></Form.Control>
        </Form.Group>


        {/* <h3 className="text-center my-4">Categoria</h3>
        <div className="text-center">
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Bebida caliente"
            value="bebidaCaliente"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Bebida Fria"
            value="bebidaFria"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Dulce"
            value="dulce"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Salado"
            value="salado"
            onChange={cambioCategoria}
          ></Form.Check>
        </div> */}
        <Button variant="danger" type="submit" className="w-100 my-5">
          Guardar
        </Button>
        {
          (error === true) ? (<Alert variant="warning">Todos los campos son obligatorios</Alert>) : (null)
        }

      </Form>
    </Container>

  );
};

export default withRouter(Noticias);