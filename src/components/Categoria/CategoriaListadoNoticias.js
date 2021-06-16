import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CategoriaListadoNoticias = () => {
  const nombreCategoria = useParams().nombreCategoria;
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarNoticias();
  }, []);

  const consultarNoticias = async () => {
    try {
      const URL =
        process.env.REACT_APP_URL_NOTICIA + "/categoria/" + nombreCategoria;
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const resp = await respuesta.json();
        setNoticias(resp);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al consultar las noticias",
      });
    }
  };

  return (
    <Container>
      <h1 className="text-center my-5 categoria-titulo">
        Listado de Noticias para la categoria {nombreCategoria}
      </h1>

      <ListGroup className="my-5">
        {noticias.map((noticia) => (
          <div className="Row d-flex justify-content-md-between my-3">
            <img src={noticia.imagen} className="col-md-2"></img>
            <p className="col-md-10">
              <h5>{noticia.titulo}</h5>
              <h6>{noticia.subtitulo}</h6>
            </p>
          </div>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CategoriaListadoNoticias;
