import React, { useState } from 'react';
import { Button, Alert, Form, Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useParams, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import { validarNombre, validarNombreCategoria, validarTextArea, validarUrlImagen } from "./Validaciones";
import CategoriasButton from './CategoriasButton';


const Noticias = (props) => {
  const URLNOT = process.env.REACT_APP_URL_NOTICIA;
  const [titular, setTitular] = useState("");
  const [bajada, setBajada] = useState("");
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
        bajada,
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
console.log(props.categorias);

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
        <Form.Select aria-label="Default select example" eventKey={categoria._id}>
        {
          props.categorias.map((cat) => <CategoriasButton categoria={cat}></CategoriasButton>)
        }
        </Form.Select>

        {/* <CategoriasButton categoria={props.categorias}></CategoriasButton> */}

        
          {/* <Form.Select aria-label="Default select example" eventKey={categoria._id}>
          {props.categorias.map((categoria) => (
            <option>{categoria.nombre}</option>
            ))}
          </Form.Select> */}

        {/* <CategoriasButton/> */}

          {/* {props.categoria.map((cat) => (
          <Form.Select aria-label="Default select example" eventKey={cat._id}>
            <option>{props.cat.nombre}</option>
          </Form.Select>
        ))} */}

         

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

export default Noticias;