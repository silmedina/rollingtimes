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
            <Link className='btn mx-2 my-1 background-orange text-light'to={`/noticias/agregar`}><FontAwesomeIcon icon={faPlus} className="pr-1"></FontAwesomeIcon>Agregar noticias</Link>
            <ListGroup className='my-5'>
                {
                    props.noticias.map((nota) => <ItemNoticia noticia={nota} key={nota._id} consultarNoticias={props.consultarNoticias}></ItemNoticia>)
                }
            </ListGroup>
        </Container>
    );
};

export default ListarNoticias;