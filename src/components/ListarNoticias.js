import React from 'react';
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ItemNoticia from './ItemNoticia';
import Spinner from "../components/common/Spinner";

const ListarNoticias = (props) => {
    const redirigirAgregarNoticia = () => {
        props.history.push("/noticias/agregar");
    };

    return (
        <Container>
            <h1 className='text-center my-5 categoria-titulo'>Lista de Noticias</h1>
            <button
                className="mx-2 my-1 background-orange button-send-close"
                type="button"
                onClick={() => redirigirAgregarNoticia()}
            >
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Agregar noticia
            </button>
            
            {!props.noticias.length && !props.cargando && (
                <div className='container d-flex flex-column my-5 align-items-center'>
                <span>Sin noticias</span>
            </div>
            )}

            {props.cargando && (
                <div  className='container d-flex flex-column my-5 align-items-center'>
                <Spinner></Spinner>
                <span>Cargando...</span>
                </div>
            )}

            {!props.cargando && props.noticias.length !== 0 && (
                <Table striped bordered hover  className="my-5">
                <thead>
                    <tr>
                        <th className="col-sm-9 col-md-8">Titulo</th>
                        <th className="col-sm-1 col-md-2">Categorias</th>
                        <th className="col-sm-1 col-md-1">Publicar / Destacar</th>
                        <th className="col-sm-1 col-md-1">Editar / Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.noticias.map((nota) => <ItemNoticia noticia={nota} destacar={props.destacar} key={nota._id} consultarNoticias={props.consultarNoticias}></ItemNoticia>)
                    }
                </tbody>
            </Table>
            )}
        </Container>
    );
};

export default ListarNoticias;