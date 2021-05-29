import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import ItemCategoria from './ItemCategoria';


const ListarCategorias = (props) => {
    return (
        <Container>
            <h1 className='text-center my-5'>Lista de Categorias</h1>
            <ListGroup className='my-5'>
                {
                    props.categorias.map((cat) => <ItemCategoria categoria={cat} key={cat._id}></ItemCategoria>)
                }
            </ListGroup>
        </Container>
    );
};

export default ListarCategorias;