import React, { useEffect, useState, useRef } from "react";
import { Alert, Form, Container } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../Common/Spinner";
import {
  validarTitulo,
  validarSubtitulo,
  validarCuerpo,
  validarCategoria,
  validarAutor
} from "../Validaciones";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const tituloRef = useRef("");
  const subtituloRef = useRef("");
  const textoRef = useRef("");
  const imagenRef = useRef("");
  const autorRef = useRef("");
  const [noticia, setNoticia] = useState({});
  const [cargandoNoticia, setCargandoNoticia] = useState(false);
  const [error, setError] = useState(false);
  const URLNOT = process.env.REACT_APP_URL_NOTICIA + "/" + id;
  const [categoria, setCategoria] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    getNoticia();
  }, []);

  useEffect(() => {
    setCategoria(noticia.categoria);
  }, [noticia]);

  const getNoticia = async () => {
    try {
      setCargandoNoticia(true);
      const respuesta = await fetch(URLNOT);

      if (respuesta.status === 200) {
        const resp = await respuesta.json();
        setNoticia(resp);
        setCategoria(resp.categoria);
      }
      setCargandoNoticia(false);
    } catch (error) {
      setCargandoNoticia(false);
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
      validarTitulo(tituloRef.current.value) &&
      validarSubtitulo(subtituloRef.current.value) &&
      validarCuerpo(textoRef.current.value) &&
      validarCategoria(categoria) &&
      validarAutor(autorRef.current.value) 
    ) {
      setError(false);
      try {
        const noticiaModificada = {
          titulo: tituloRef.current.value,
          subtitulo: subtituloRef.current.value,
          texto: textoRef.current.value,
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
            "Noticia Modificada",
            "La noticia se modifico con exito",
            "success"
          );
          props.consultarNoticias();
          props.history.push("/noticias");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo modificar la noticia.",
          });
          console.log(respuesta);
  
          if (respuesta.status === 200) {
            Swal.fire(
              "Nota Modificada",
              "La nota se modifico con exito",
              "success"
            );
            props.consultarNoticias();
            props.history.push("/noticias");
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "No se pudo modificar la nota.",
            });
          }
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un error al guardar la noticia",
        });
        console.log(error);
      }
      
    } else {
      setError(true);
      if (validarTitulo(tituloRef.current.value) === false) {
        setMensajeError(
          "El titulo no es valido. El titulo debe tener un minimo de 7 caracteres y un maximo de 50"
        );
        return;
      }
      if (validarSubtitulo(subtituloRef.current.value) === false) {
        setMensajeError("El subtitulo no es valido. Subtitulo debe tener un minimo de 10 caracteres y un maximo de 90");
        return;
      }

      if (validarCuerpo(textoRef.current.value) === false) {
        setMensajeError("El texto no valido");
        return;
      }

      if (validarCategoria(categoria) === false) {
        setMensajeError("Debe seleccionar una categoria");
        return;
      }

      if (validarAutor(autorRef.current.value) === false) {
        setMensajeError("Debe ingresar un autor");
        return;
      }
    }
  };

  const retornarListadoNoticias = () => {
    props.history.push("/noticias");
  };

  const cargandoCategorias = ()=>{
    return props.cargandoCategorias || cargandoNoticia;
  }

  const cargandoNoticiaSpinner = ()=>{
    return !props.cargandoCategorias && !cargandoNoticia;
  }

  return (
    <Container>
      <h1 className="text-center my-5 categoria-titulo">Editar la noticia</h1>
      {cargandoCategorias() && (
        <div className="container d-flex flex-column my-5 align-items-center">
          <Spinner></Spinner>
          <span>Cargando...</span>
        </div>
      )}
      {cargandoNoticiaSpinner() && (
        <Form className="my-5" onSubmit={handleSudmit}>
        <Form.Group>
          <Form.Label>Titulo de Noticia *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un titulo"
            ref={tituloRef}
            defaultValue={noticia.titulo}
          ></Form.Control>
        </Form.Group>

        {/* subtitulo */}
        <Form.Group>
          <Form.Label>Descripcion breve (copete o subtitulo) *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripcion breve"
            ref={subtituloRef}
            defaultValue={noticia.subtitulo}
          ></Form.Control>
        </Form.Group>

        {/* texto */}
        <Form.Group>
          <Form.Label>Texto de la noticia *</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingrese una descripcion detallada"
            style={{ height: "200px" }}
            ref={textoRef}
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
          <Form.Label>Categoria *</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
          >
            {props.categorias.map((cat, idx) => (
              <option key={idx} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* autor */}
        <Form.Group>
          <Form.Label>Autor *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del autor"
            ref={autorRef}
            defaultValue={noticia.autor}
          ></Form.Control>
        </Form.Group>

        {error ? <Alert variant="danger">{mensajeError}</Alert> : null}

        <div className="d-flex justify-content-lg-end">
          <button
            className="my-5 mr-2 background-black button-send-close"
            type="button"
            onClick={() => retornarListadoNoticias()}
          >
            Cancelar
          </button>
          <button
            className="my-5 background-orange button-send-close"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </Form>
      )}

      
    </Container>
  );
};

export default withRouter(EditarNoticia);
