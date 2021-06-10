import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import ItemCategoria from './ItemCategoria';
import {Link, withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ListarCategorias = (props) => {
    const redirigirAgregarNoticia = () => {
        props.history.push("/categorias/nuevo");
    }
    
    return (
        <Container>
            <h1 className='text-center my-5 categoria-titulo'>Lista de Categorias</h1>
            <button
                className="mx-2 my-1 background-orange button-send-close"
                type="button"
                onClick={()=>redirigirAgregarNoticia()}
              >
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Agregar categoria
              </button>
            <ListGroup className='my-5'>
                {
                    props.categorias.map((cat) => <ItemCategoria categoria={cat} key={cat._id} consultarCategorias={props.consultarCategorias}></ItemCategoria>)
                }
            </ListGroup>
        </Container>
    );
};

export default withRouter(ListarCategorias);