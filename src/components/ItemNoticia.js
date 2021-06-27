import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPencilAlt,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

const ItemNoticia = (props) => {
  let noticiaModificada = {
    destacar: null,
  };
  let token = "";

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
              "Content-Type": "application/json",
              "Authorization": token,
            },
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

  const destacarNot = async (id) => {
    // let cambiarColor = document.getElementsByClassName("destacarBtn");

    let destacado = props.noticia.destacar;
    console.log("La noticia esta destacada?" + destacado);
    Swal.fire({
      title: "Estas seguro de destacar la noticia?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Destacar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const URLNOT = `${process.env.REACT_APP_URL_NOTICIA}/${id}`;

          if (destacado === false) {
            noticiaModificada = {
              destacar: true,
            };
          } else {
            noticiaModificada = {
              destacar: false,
            };
          }

          const respuesta = await fetch(URLNOT, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": token,
            },
            body: JSON.stringify(noticiaModificada),
          });

          console.log(respuesta);

          if (respuesta.status === 200) {
            if (destacado === false) {
              Swal.fire({
                icon: "success",
                title: "La noticia se ha agregado a Destacados!",
                text: "La noticia esta destacada actualmente",
              });
              destacado = true;
            } else {
              Swal.fire({
                icon: "success",
                title: "La noticia se ha quitado de Destacados!",
                text: "La noticia esta destacada actualmente",
              });
              destacado = false;
            }
            console.log("Nuevo estado del destacado: " + destacado);
          } else {
            console.log("error");
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

  return (
    <tr>
      <td>{props.noticia.titulo}</td>
      <td>{props.noticia.categoria}</td>
      <td className="d-flex justify-content-center">
        <Button className="mr-2">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
        <Button className="destacarBtn">
          <FontAwesomeIcon
            className=""
            icon={faStar}
            onClick={() => destacarNot(props.noticia._id)}
          ></FontAwesomeIcon>
        </Button>
      </td>
      <td>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-warning text-light mr-2"
            to={`/noticias/editar/${props.noticia._id}`}
          >
            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
          </Link>
          <Button
            variant="danger"
            onClick={() => eliminarNoticia(props.noticia._id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemNoticia;
