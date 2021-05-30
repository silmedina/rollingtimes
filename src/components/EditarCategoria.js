import React, {useEffect,useState,useRef} from 'react';
import {Button, Alert, Form, Container} from 'react-bootstrap';
import {useParams, withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';


const EditarCategoria = (props) => {
    const id = useParams().id;
    const nombreCategoriaRef = useRef('');
    const [categoria, setCategoria] = useState({});
    const [error, setError] = useState(false);

    const URL = process.env.REACT_APP_URL_CATEGORIA+'/'+id;

    useEffect(()=>{
        consultarCategoria();
    },[]);

    const consultarCategoria = async()=>{
        try {
           const respuesta = await fetch( URL );
           if (respuesta.status===200){
               const resp = await respuesta.json();
               setCategoria(resp);
           }
        } catch (error) {
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'Ha ocurrido un error al consultar la categoria',
            })
        }
    }

    const handleSudmit = async(e)=>{
        e.preventDefault();

        if(nombreCategoriaRef.current.value!==''){
            setError(false);
            try {
               const  categoriaModificada = {
                   nombre:nombreCategoriaRef.current.value
               }

               const respuesta = await fetch(URL, {
                   method:"PUT", 
                   headers:{"Content-Type":"application/json"},
                   body:JSON.stringify(categoriaModificada)
               })

               if(respuesta.status===200){
                   Swal.fire(
                      'Categoria Modificada',
                      'La categoria se modifico con exito',
                      'success'
                   );

                   props.consultarCategorias();
                   props.history.push('/categorias');
               }

            
            } catch (error) {
                Swal.fire({
                    icon:'error',
                    title:'Error',
                    text:'Ha ocurrido un error al guardar la categoria',
                })  
            }
        }else{
            setError(true);
        }
    }

    return (
       <Container>
           <Form className= 'my-5' onSubmit= {handleSudmit}>
                <h1 className= 'text-center my-5'>Editar Categoria</h1>
                <Form.Group>
                    <Form.Label>Nombre de Categoria*</Form.Label>
                    <Form.Control type='text' ref={nombreCategoriaRef} defaultValue={categoria.nombre}></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit' className='w-100 my-5'>Guardar</Button>
                {
                    error?<Alert variant='warning' >El nombre de la categoria es obligatorio</Alert>:null
                }
           </Form>
       </Container>
    );
};

export default withRouter(EditarCategoria);