import React, { useEffect, useState, useRef } from "react";
import { Button, Alert, Form, Container } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validarNombre,
  validarTitulo,
  validarSubtitulo,
  validarCuerpo,
} from "./Validaciones";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const titularRef = useRef("");
  const subtituloRef = useRef("");
  const cuerpoRef = useRef("");
  const imagenRef = useRef("");
  const autorRef = useRef("");
  const [noticia, setNoticia] = useState({});
  const [error, setError] = useState(false);
  const URLNOT = process.env.REACT_APP_URL_NOTICIA + "/" + id;
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    getNoticia();
  }, []);

  useEffect(() => {
    setCategoria(noticia.categoria);
  }, [noticia]);

  const getNoticia = async () => {
    try {
      const respuesta = await fetch(URLNOT);
      if (respuesta.status === 200) {
        const resp = await respuesta.json();
        setNoticia(resp);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al consultar la noticia.",
      });
    }
  };

  const handleSudmit = async (e) => {
    e.preventDefault();

    if (
      validarTitulo(titularRef.current.value) &&
      validarSubtitulo(subtituloRef.current.value) &&
      validarCuerpo(cuerpoRef.current.value) &&
      validarNombre(autorRef.current.value)
    ) {
      setError(false);
      try {
        const noticiaModificada = {
          titulo: titularRef.current.value,
          subtitulo: subtituloRef.current.value,
          texto: cuerpoRef.current.value,
          imagen: imagenRef.current.value,
          categoria: categoria,
          autor: autorRef.current.value,
        };
        const respuesta = await fetch(URLNOT, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(noticiaModificada),
        });

        if (respuesta.status === 200) {
          Swal.fire(
            "Nota Modificada",
            "La nota se modifico con exito",
            "success"
          );
          props.consultarNoticias();
          props.history.push("/noticias");
        } else {
          console.log(respuesta);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo editar la nota. Revisa todos los campos e intentalo de nuevo.",
      });
    }
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSudmit}>
        <h1 className="text-center my-5">Editar la nota</h1>
        {/* <Link className='btn mx-2 my-1 background-orange text-light'to={`/noticias`}><FontAwesomeIcon icon={faList} className="pr-1"></FontAwesomeIcon>Lista de notas</Link> */}
        {/* titular */}
        <Form.Group>
          <Form.Label>Titulo de Noticia (Titular)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un titulo"
            ref={titularRef}
            defaultValue={noticia.titulo}
          ></Form.Control>
        </Form.Group>
        {/* subtitulo */}
        <Form.Group>
          <Form.Label>Descripcion breve (copete o subtitulo)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion breve"
            ref={subtituloRef}
            defaultValue={noticia.subtitulo}
          ></Form.Control>
        </Form.Group>
        {/* cuerpo */}
        <Form.Group>
          <Form.Label>Cuerpo de la noticia</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingrese una descripcion detallada"
            ref={cuerpoRef}
            defaultValue={noticia.texto}
          ></Form.Control>
        </Form.Group>
        {/* imagen */}
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pegue la URL de la imagen"
            ref={imagenRef}
            defaultValue={noticia.imagen}
          ></Form.Control>
        </Form.Group>

        {/* categoria */}
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            as="select"
            name=""
            id=""
            onChange={(e) => setCategoria(e.target.value)}
            value={noticia.categoria}
          >
            <option value={noticia.categoria}>{noticia.categoria}</option>
            {props.categorias.map((cat, idx) => (
              <option key={idx} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* autor */}
        <Form.Group>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del autor"
            ref={autorRef}
            defaultValue={noticia.autor}
          ></Form.Control>
        </Form.Group>

        <Button variant="warning" type="submit" className="w-100 my-5">
          Guardar
        </Button>
        {error ? (
          <Alert variant="warning">Todos los campos son reuqeridos.</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default withRouter(EditarNoticia);
