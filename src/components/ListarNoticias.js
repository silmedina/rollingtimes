import React from 'react';
import { Button, Alert, Form, Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useParams, withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import ItemNoticia from './ItemNoticia';


const ListarNoticias = (props) => {
    return (
        <Container>
        <h1 className="text-center my-5">Noticias</h1>
        <ListGroup className='my-5'>
            {
                props.noticias.map((not)=> <ItemNoticia noticias={not} key={not._id} consultarNoticias={props.consultarNoticias}></ItemNoticia>)
            }      
        </ListGroup>
      </Container>
    );
};

export default ListarNoticias;