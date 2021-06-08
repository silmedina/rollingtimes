import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CardXSmall } from "./Inicio/BoardNoticias";
import "./Noticia/detalleNoticia.css";

export const Noticia = ({ noticia = {} }) => {
  return (
    <div
      id="NoticiaContainer"
      className="flex-column"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <p id="CategoriaRoot">
        Rolling Times - {noticia.categoria.toUpperCase()}
      </p>
      <h1 className="noticia-titulo">{noticia.titulo}</h1>
      <p>{noticia.fecha || "10 Junio de 2021"}</p>
      <p>
        <strong> Por {noticia.autor || "Benjamin Draniczarek"}</strong>
      </p>

      <img src={noticia.imagen} id='NoticiaImagen' alt='noticia' />

      <p id='NoticiaDescripcion'>{noticia.descripcion}</p>
    </div>
  );
};

const DetalleNoticia = () => {
  const arrayNoticias = [
    {
      imagen:
        "https://phantom-marca.unidadeditorial.es/fc835a6118e35943cf4303d1f34f4f6e/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/05/16228915657697.jpg",
      titulo: "Colon Campeon KING",
      descripcion:
        "Enim anim duis officia aute ad ipsum est magna aliquip et commodo amet. Eu ipsum sunt labore consectetur cupidatat do. Aliqua aliquip enim proident excepteur officia amet labore magna id dolor velit. Sunt enim incididunt irure excepteur ea.",
      categoria: "random",
    },

    {
      imagen:
        "https://telesoldiario.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-01-at-16.54.12-1.jpeg",
      titulo: "Gallardo tiene un Clon",
      descripcion:
        "Enim anim duis officia aute ad ipsum est magna aliquip et commodo amet. Eu ipsum sunt labore consectetur cupidatat do. Aliqua aliquip enim proident excepteur officia amet labore magna id dolor velit. Sunt enim incididunt irure excepteur ea.",
      categoria: "random",
    },

    {
      imagen: "https://i.ytimg.com/vi/uP9uw-mlNic/maxresdefault.jpg",
      titulo: "El topo se murió",
      descripcion:
        "Enim anim duis officia aute ad ipsum est magna aliquip et commodo amet. Eu ipsum sunt labore consectetur cupidatat do. Aliqua aliquip enim proident excepteur officia amet labore magna id dolor velit. Sunt enim incididunt irure excepteur ea.",
      categoria: "random",
    },
  ];

  return (
    <div id="DetalleNoticiaContainer">
      <Row style={{ padding: 0, margin: 0 }}>
        <Col md={8} className="flex-column">
          <Noticia noticia={arrayNoticias[0]} />
        </Col>

        <Col md={4} className="flex-column">
          {arrayNoticias.map((noticia) => (
            <CardXSmall noticia={noticia} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default DetalleNoticia;
