import React from 'react';
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import ItemNoticia from './ItemNoticia';


const ListarNoticias = (props) => {
    return (
        <Container>
            <h1 className='text-center my-2'>Lista de Noticias</h1>
            <Link className='btn mx-2 my-1 background-orange text-light' to={`/noticias/agregar`}><FontAwesomeIcon icon={faPlus} className="pr-1"></FontAwesomeIcon>Agregar noticias</Link>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="col-sm-9 col-md-8">Titulo</th>
                        <th className="col-sm-1 col-md-2">Categorias
                            <select name="categorias" id="categoriasSelect">
                                {
                                props.categorias.map((cat, idx) => 
                                    (<option key={idx} value={cat.nombre}>{cat.nombre}</option>))
                                }
                            </select>
                        </th>
                        <th className="col-sm-1 col-md-1">Publicar / Destacar</th>
                        <th className="col-sm-1 col-md-1">Editar / Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.noticias.map((nota) => <ItemNoticia noticia={nota} key={nota._id} consultarNoticias={props.consultarNoticias}></ItemNoticia>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ListarNoticias;