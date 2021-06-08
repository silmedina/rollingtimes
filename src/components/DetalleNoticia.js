import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CardXSmall } from "./Inicio/BoardNoticias";
import Publicidad from "./Inicio/Publicidad";
import "./Noticia/detalleNoticia.css";

export const Noticia = ({ noticia = {} }) => {
  return (
    <div id="NoticiaContainer" className="flex-column">
      <p id="CategoriaRoot">
        Rolling Times - {noticia.categoria.toUpperCase()}
      </p>
      <h1 className="noticia-titulo">{noticia.titulo}</h1>
      <p>{noticia.fecha || "10 Junio de 2021"}</p>
      <p>
        <strong> Por {noticia.autor || "Benjamin Draniczarek"}</strong>
      </p>

      <div className='imagen-container'>
        <img src={noticia.imagen} id="NoticiaImagen" alt="noticia" />
        <p>Foto en @rollingtimes</p>
      </div>

      <p id="NoticiaDescripcion">{noticia.descripcion}</p>

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

const DetalleNoticia = () => {
  const arrayNoticias = [
    {
      imagen:
        "https://phantom-marca.unidadeditorial.es/fc835a6118e35943cf4303d1f34f4f6e/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/05/16228915657697.jpg",
      titulo: "Colon Campeon KING",
      descripcion: `El gerente general de Pfizer Argentina, Nicolás Vaquer, indicó durante su exposición en la Cámara que Diputados que hoy el marco legal no es compatible con algunos de los aspectos contractuales que está proponiendo Pfizer. Precisó, además, que el laboratorio no participó del diseño de la norma que confiere indemnidad a los laboratorios productores de vacunas, aprobada por el Congreso en octubre del año pasado.

        Vaquer indicó que el 11 julio del año pasado el laboratorio firmó un acuerdo de confidencialidad con el gobierno argentino, en el que compartieron las condiciones para la firma de un eventual acuerdo. El 25 de ese mes se realizó una primera oferta comercial que fue formalizada ante el Gobierno dos días después.`,
      categoria: "random",
      comentario: "LA MAMI",
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
        <Col md={9} className="flex-column">
          <Noticia noticia={arrayNoticias[0]} />
        </Col>

        <Col md={3} className="flex-column side-noticias">
          {arrayNoticias.slice(0, 3).map((noticia) => (
            <CardXSmall noticia={noticia} />
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
