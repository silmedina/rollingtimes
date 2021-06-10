import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardXSmall } from "./Inicio/BoardNoticias";
import Publicidad from "./Inicio/Publicidad";
import "./Noticia/detalleNoticia.css";
import { useParams } from "react-router-dom";

export const Noticia = ({ noticia = {} }) => {
  return (
    <div id="NoticiaContainer" className="flex-column">
      <p id="CategoriaRoot">Rolling Times - {noticia.categoria}</p>
      <h1 className="noticia-titulo">{noticia.titulo}</h1>
      <p>{noticia.fecha || "10 Junio de 2021"}</p>
      <p>
        <strong> Por {noticia.autor || "Benjamin Draniczarek"}</strong>
      </p>

      <div className="imagen-container">
        <img src={noticia.imagen} id="NoticiaImagen" alt="noticia" />
        <p>Foto en @rollingtimes</p>
      </div>

      <p id="NoticiaDescripcion">{noticia.texto}</p>

      {noticia.comentario && (
        <div
          className="flex-column"
          style={{ width: "100%", padding: "4rem 0" }}
        >
          <h3 id="NoticiaComentario">
            " {noticia.comentario || "¿Que hará el hombre araña ahora?"} "
          </h3>
        </div>
      )}

      <p id="Autor" style={{ paddingTop: "2rem" }}>
        <strong> Por {noticia.autor || "Benjamin Draniczarek"}</strong>
      </p>
    </div>
  );
};

const DetalleNoticia = ({ noticias = [] }) => {
  let { id } = useParams();

  const [noticia, setNoticia] = useState({});

  useEffect(() => {
    setNoticia(noticias.find(noti => noti._id === id))
  }, [noticias]);

  return (
    <div id="DetalleNoticiaContainer">
      <Row style={{ padding: 0, margin: 0 }}>
        <Col md={9} className="flex-column">
          <Noticia noticia={noticia} />
        </Col>

        <Col md={3} className="flex-column side-noticias">
          {noticias
            .reverse()
            .slice(0, 3)
            .map((noticia, idx) => (
              <CardXSmall key={idx} noticia={noticia} />
            ))}
        </Col>
      </Row>

      <div className="pulicidad-section">
        <Publicidad publicidad={1} />
      </div>
    </div>
  );
};

export default DetalleNoticia;
