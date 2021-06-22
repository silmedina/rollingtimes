import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemNoticia = (props) => {

  const eliminarNoticia = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar esta noticia?",
      text: "No podras recuperar la noticia eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLNOT = `${process.env.REACT_APP_URL_NOTICIA}/${id}`;
          const respuesta = await fetch(URLNOT, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "noticia Eliminada",
              "La noticia se elimino correctamente",
              "success"
            );

            props.consultarNoticias();
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ha ocurrido un error al eliminar la noticia",
          });
        }
      }
    });
  };

  

  const destacarNot = () => {
    // let cambiarColor = document.getElementsByClassName("destacarBtn");
    if(props.noticia.destacar === false){
      props.noticia.destacar = true
      // cambiarColor.style.color = "#ec4e20" ;
      console.log(props);
    }else{
      props.noticia.destacar = false
      // cambiarColor.style.color = "#ec4e20" ;

    }
  }


  return (
    <tr>
      <td>{props.noticia.titulo}</td>
      <td>{props.noticia.categoria}</td>
      <td className="d-flex justify-content-center">
        <Button className="mr-2">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <Button className="destacarBtn">
          <FontAwesomeIcon className="" icon={faStar} onClick={() => destacarNot(props.noticia)}></FontAwesomeIcon>
        </Button>
      </td>
      <td>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-warning text-light mr-2" to={`/noticias/editar/${props.noticia._id}`} >
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Link>
          <Button
            variant="danger"
            onClick={() => eliminarNoticia(props.noticia._id)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemNoticia;