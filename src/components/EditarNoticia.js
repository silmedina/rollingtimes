import React, { useEffect, useState, useRef } from 'react';
import { Button, Alert, Form, Container } from 'react-bootstrap';
import { useParams, withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validarNombre, validarNombreCategoria, validarTextArea, validarUrlImagen } from "./Validaciones";

const EditarNoticia = (props) => {
    const URLNOT = process.env.REACT_APP_URL_NOTICIAS;
    const { id } = useParams();
    const titularRef = useRef('');
    const bajadaRef = useRef('');
    const cuerpoRef = useRef('');
    const imagenRef = useRef('');
    const categoriaRef = useRef('');
    const autorRef = useRef('');
    const fechaRef = useRef('');
    const [noticia, setNoticia] = useState({});
    const [error, setError] = useState(false);
    const [mensajeError, setMensajeError] = useState('');


    useEffect(() => {
        consultarNoticia();
    })

    const consultarNoticia = async () => {
        try {
            const respuesta = await fetch(URLNOT);
            console.log(respuesta);
            if (respuesta.status === 200) {
                const resp = await respuesta.json();
                setNoticia(resp);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error al consultar la noticia.',
            })
        }

    }


    const handleSudmit = async (e) => {
        e.preventDefault();
        if (
            // validar los campos
            validarTextArea(titular) &&
            validarTextArea(bajada) &&
            validarTextArea(cuerpo) &&
            validarUrlImagen(imagen) &&
            validarNombreCategoria(categoria) &&
            validarNombre(autor)
        ) {
            setError(false);
            try {
                const noticiaModificada = {
                    titular: titularRef.current.value,
                    bajada: bajadaRef.current.value,
                    cuerpo: cuerpoRef.current.value,
                    imagen: imagenRef.current.value,
                    categoria: categoriaRef.current.value,
                    autor: autorRef.current.value,
                    fecha: fechaRef.current.value
                }

                const respuesta = await fetch(URL, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(noticiaModificada)
                })

                const informacion = await respuesta.json();

                if (respuesta.status === 200) {
                    Swal.fire(
                        'Categoria Modificada',
                        'La categoria se modifico con exito',
                        'success'
                    );

                    props.consultarNoticias();
                    props.history.push('/categorias');
                } else if (respuesta.status === 500) {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: informacion.mensaje,
                    });
                }


            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error al guardar la noticia.',
                })
            }
        } else {
            setError(true);
            setMensajeError(validacionCategoriaResult.mensaje);
        }
    }

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
                        ref={titularRef} defaultValue={noticia.titular}
                    ></Form.Control>
                </Form.Group>
                {/* bajada */}
                <Form.Group>
                    <Form.Label>Descripcion breve (copete o bajada)</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una descripcion breve"
                        ref={bajadaRef} defaultValue={noticia.bajada}
                    ></Form.Control>
                </Form.Group>
                {/* cuerpo */}

                <Form.Group>
                    <Form.Label>Cuerpo de la noticia</Form.Label>
                    <Form.Control as="textarea"
                        placeholder="Ingrese una descripcion detallada"
                        ref={cuerpoRef} defaultValue={producto.cuerpo}

                    ></Form.Control>
                </Form.Group>
                {/* imagen */}
                <Form.Group>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pegue la URL de la imagen"
                        ref={imagenRef} defaultValue={producto.imagen}
                    ></Form.Control>
                </Form.Group>

                {/* categoria */}

                {/* autor */}
                <Form.Group>
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre del autor"
                        ref={autorRef} defaultValue={producto.autor}
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la fecha"
                        ref={fechaRef} defaultValue={producto.fecha}
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


export default EditarNoticia;