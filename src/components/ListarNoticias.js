import React from 'react';
import { Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import ItemNoticia from './ItemNoticia';


const ListarNoticias = (props) => {
    return (
    <Container>
            <h1 className='text-center my-5'>Lista de Noticias</h1>
            <Link className='btn btn-success text-light'to={`/noticias/agregar/`}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Agregar nueva nota</Link>
            <ListGroup className='my-5'>
                {
                    props.noticias.map((nota) => <ItemNoticia noticia={nota} key={nota._id} consultarNoticias={props.consultarNoticias}></ItemNoticia>)
                }
            </ListGroup>
        </Container>
    );
};

export default ListarNoticias;