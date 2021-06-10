import React, { useState, useEffect } from "react";
import { Button, Alert, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";
import {
  validarNombre,
  validarNombreCategoria,
  validarTextArea,
  validarUrlImagen,
} from "./Validaciones";

const Noticias = (props) => {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // validacion
    if (
      validarTextArea(titulo) &&
      validarTextArea(subtitulo) &&
      validarTextArea(texto) &&
      validarUrlImagen(imagen) &&
      validarNombreCategoria(categoria) &&
      validarNombre(autor)
    ) {

      setError(true);
      console.log("Fallo validacion");
    } else {
      setError(false);

      const noticia = {
        titulo,
        subtitulo,
        texto,
        imagen,
        categoria,
        autor,
      };
      console.log(noticia);
      
      try {
        
        const configuracion = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticia),
        };
        console.log("A resp");
        const respuesta = await fetch(
          "http://localhost:4001/api/noticia/",
          configuracion
        );
       
        if (respuesta.status === 201) {
          Swal.fire(
            "Noticia creada",
            "La noticia se agrego correctamente",
            "success"
          );
          props.consultarNoticias();
        } else if (respuesta.status === 500) {
          Swal.fire(
            "Error",
            "Hay un error en uno o más campos. En caso de que el error persista, comuniquese con atención al cliente.",
            "error"
          );
        }
      } catch (error) {
        Swal.fire("Error", "La noticia no se agregó", "error");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (props.categorias.length !== 0) {
      setCategoria(props.categorias[0].nombre);
    } else {
      setCategoria("General");
    }
  }, [props]);

  const formatYmd = (date) => date.toISOString().slice(0, 10);

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="text-center my-2">Agregar Noticia</h1>
        <Link className='btn mx-2 my-1 background-orange text-light'to={`/noticias`}><FontAwesomeIcon icon={faList} className="pr-1"></FontAwesomeIcon>Lista de notas</Link>
        <hr />
        {/* titulo */}
        <Form.Group>
          <Form.Label>Titulo de Noticia (titulo)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un titulo"
            onChange={(e) => setTitulo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* subtitulo */}
        <Form.Group>
          <Form.Label>Descripcion breve (copete o subtitulo)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion breve"
            onChange={(e) => setSubtitulo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* texto */}
        <Form.Group>
          <Form.Label>Texto de la noticia</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingrese una descripcion detallada"
            style={{ height: '200px' }}
            onChange={(e) => setTexto(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* imagen */}
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar URL"
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
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          as="select"
          name=""
          id=""
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        >
          {props.categorias.map((cat, idx) => (
            <option key={idx} value={cat.nombre}>{cat.nombre}</option>
          ))}
        </Form.Control>
        </Form.Group>

        <Button variant="warning" type="submit" className="w-100 my-5">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default Noticias;
