import React from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const ItemCategoria = (props) => {
    return (
       <ListGroup.Item className='d-flex justify-content-between'>
           <p>
               {
                   props.categoria.nombre
               }
           </p>
           <div>
               <Link className='btn btn-warning mr-3 text-light'to={`/categorias`}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Link>
               <Button variant='danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
           </div>
       </ListGroup.Item>
    );
};

export default ItemCategoria;