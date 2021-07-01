import React, { useEffect, useState } from "react";
import { Container, ListGroup, Card } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Moment from "moment";
import "moment/locale/es";
import Spinner from "../Common/Spinner";

const BuscarNoticias = () => {
  const terminoBusqueda = useParams().terminoBusqueda;
  const [cargando, setCargando] = useState(false);
  const [noticias, setNoticias] = useState([]);
  let history = useHistory();

  useEffect(() => {
    consultarNoticias();
  }, []);

  const consultarNoticias = async () => {
    try {
      setCargando(true);
      const URL =
        process.env.REACT_APP_URL_NOTICIA + "/buscar/" + terminoBusqueda;
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const resp = await respuesta.json();
        setNoticias(resp);
        setCargando(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al consultar las noticias",
      });
      setCargando(false);
    }
  };

  const formatearFecha = (fecha) => {
    Moment.locale("es");
    let fechaFormateada = Moment(fecha).format("LLLL");
    return fechaFormateada;
  };

  const retornarHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1 className="text-center my-5 categoria-titulo">
        Resultado busqueda: <span className="color4">{terminoBusqueda}</span>
      </h1>

      {!noticias.length && !cargando && (
        <div className="container d-flex flex-column my-5 align-items-center">
          <span>Sin noticias</span>
        </div>
      )}
      {cargando && (
        <div className="container d-flex flex-column my-5 align-items-center">
          <Spinner></Spinner>
          <span>Cargando...</span>
        </div>
      )}
      {!cargando && (
        <ListGroup className="my-5">
          {noticias.map((noticia) => (
            <Card>
              <Card.Body>
                <Card.Title className="categoria-subtitulo">
                  <strong>{noticia.titulo}</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted categoria-subtitulo">
                  {formatearFecha(noticia.fecha)}
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex justify-content-between my-3">
                    <img
                      src={noticia.imagen}
                      className="col-md-2 img img-fluid"
                    ></img>
                    <p className="col-md-10">
                      <h6 className="categoria-texto">{noticia.subtitulo}</h6>
                      <footer className="blockquote-footer">
                        Autor <cite title="Source Title">{noticia.autor}</cite>
                      </footer>
                    </p>
                  </div>
                </Card.Text>
                <div id="notfoundlinks">
                  <Card.Link href={`/noticia/${noticia._id}`}>
                    Ir a la noticia
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </ListGroup>
      )}
      <div className="d-flex justify-content-lg-end">
        <button
          className="my-5 mr-2 background-black button-send-close"
          type="button"
          onClick={() => retornarHome()}
        >
          Volver
        </button>
      </div>
    </Container>
  );
};

export default BuscarNoticias;
