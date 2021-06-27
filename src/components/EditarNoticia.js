import React, { useEffect, useState, useRef } from "react";
import { Button, Alert, Form, Container } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validarNombre,
  validarTitulo,
  validarSubtitulo,
  validarCuerpo,
  validarUrlImagen,
} from "./Validaciones";

const EditarNoticia = (props) => {
  const { id } = useParams();
  const tituloRef = useRef("");
  const subtituloRef = useRef("");
  const textoRef = useRef("");
  const imagenRef = useRef("");
  const autorRef = useRef("");
  let destacar = false;
  let publicar = false;
  const [noticia, setNoticia] = useState({});
  const [error, setError] = useState(false);
  const URLNOT = process.env.REACT_APP_URL_NOTICIA + "/" + id;
  const [categoria, setCategoria] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  let token = localStorage.getItem("jwt");

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
      console.log("error");
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
      validarCuerpo(textoRef.current.value)
      // validarUrlImagen(imagenRef.current.value) &&
      // validarNombre(autorRef.current.value)
    ) {
      setError(false);
      if(token !== null){
        try {
          const noticiaModificada = {
            titulo: tituloRef.current.value,
            subtitulo: subtituloRef.current.value,
            texto: textoRef.current.value,
            imagen: imagenRef.current.value,
            categoria: categoria,
            autor: autorRef.current.value,
            destacar: false,
            publicar: false,
          };
          console.log(token)
          const respuesta = await fetch(URLNOT, {
            method: "PUT",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token
             },
            body: JSON.stringify(noticiaModificada),
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
        } catch (error) {
          console.log(error);
        }
      }else{
        Swal.fire({
          icon: "error",
          title: "No tienes los permisos para realizar esta accion",
        });
      }
      
    } else {
      if (validarTitulo(tituloRef.current.value) === false) {
        setError(true);
        console.log("pase por titulo");
        setMensajeError(
          "El titulo no es valido. El titulo debe tener un minimo de 7 caracteres y un maximo de 50"
        );
      }
      if (validarSubtitulo(subtituloRef.current.value) === false) {
        setError(true);
        console.log("pase por subtitulo");
        setMensajeError(
          "El subtitulo no es valido. Subtitulo debe tener un minimo de 10 caracteres y un maximo de 90"
        );
      }
      if (validarCuerpo(textoRef.current.value) === false) {
        console.log("pase por texto");
        setError(true);
        setMensajeError("El texto no valido");
      }
      if (categoria === "") {
        setError(true);
        setMensajeError("Debe seleccionar una categoria");
      }
    }
  };

  const retornarListadoNoticias = () => {
    props.history.push("/noticias");
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSudmit}>
        <h1 className="text-center my-2">Editar la nota</h1>
        <hr className="mb-5" />
        <Form.Group>
          <Form.Label>Titulo de Noticia (titulo)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un titulo"
            ref={tituloRef}
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

        {/* texto */}
        <Form.Group>
          <Form.Label>Texto de la noticia</Form.Label>
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
    </Container>
  );
};

export default withRouter(EditarNoticia);
