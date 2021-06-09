import React, { Fragment, useState } from 'react';
import { Button, Alert, Form, Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useParams, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';
import { validarNombre, validarNombreCategoria, validarTextArea, validarUrlImagen } from "./Validaciones";

const CategoriasButton = (props) => {
    console.log(props.categoria.nombre);
    return (
        <Fragment>
        
                {/* <Form.Select aria-label="Default select example">
                    <option>{props.categoria.nombre}</option>
                </Form.Select> */}

<option>{props.categoria.nombre}</option>
            
            
        </Fragment>
    );
};

export default CategoriasButton;