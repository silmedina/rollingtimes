import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import ItemCategoria from './ItemCategoria';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ListarCategorias = (props) => {
    return (
        <Container>
            <h1 className='text-center my-5'>Lista de Categorias</h1>
            <Link className='btn btn-success text-light'to={`/categorias/nuevo`}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Agregar nueva Categoria</Link>
            <ListGroup className='my-5'>
                {
                    props.categorias.map((cat) => <ItemCategoria categoria={cat} key={cat._id}></ItemCategoria>)
                }
            </ListGroup>
        </Container>
    );
};

export default ListarCategorias;