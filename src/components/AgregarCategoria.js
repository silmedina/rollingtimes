import React, {useState} from 'react';
import {Button, Alert, Form, Container} from 'react-bootstrap';
import Swal from 'sweetalert2';
import {useParams, withRouter} from 'react-router-dom';

const AgregarCategoria = (props) => {
    
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [error, setError] = useState(false);

    const URL = process.env.REACT_APP_URL_CATEGORIA;


   
    const handleSudmit = async(e)=>{
        e.preventDefault();

        if(nombreCategoria.trim()!==''){
            setError(false);
            try {
               const  categoriaNueva = {
                   nombre:nombreCategoria.trim()
               }

               const respuesta = await fetch(URL, {
                   method:"POST", 
                   headers:{"Content-Type":"application/json"},
                   body:JSON.stringify(categoriaNueva)
               })

               if(respuesta.status===201){
                   Swal.fire(
                      'Categoria Creada',
                      'La categoria se agrego con exito',
                      'success'
                   );

                   props.consultarCategorias();
                   props.history.push('/categorias');
               }

            
            } catch (error) {
                Swal.fire({
                    icon:'error',
                    title:'Error',
                    text:'Ha ocurrido un error al crear la categoria',
                })  
            }
        }else{
            setError(true);
        }
    }

    return (
        <Container>
           <Form className= 'my-5' onSubmit= {handleSudmit}>
                <h1 className= 'text-center my-5'>Agregar nueva Categoria</h1>
                <Form.Group>
                    <Form.Label>Nombre de Categoria*</Form.Label>
                    <Form.Control type='text' onChange={(e)=>{setNombreCategoria(e.target.value)}}></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit' className='w-100 my-5'>Guardar</Button>
                {
                    error?<Alert variant='warning' >El nombre de la categoria es obligatorio</Alert>:null
                }
           </Form>
       </Container>
    );
};

export default withRouter(AgregarCategoria);