import React from "react";
import { Col, Row } from "react-bootstrap";
import Publicidad from "./Publicidad";
import "./boardNoticias.css";

export const CardSmall = ({ noticia }) => {
  return (
    <div id="CardNoticiaContainer">
      <div id="CardNoticiaInfo">
        <p>{noticia.categoria}</p>
        <img src={noticia.imagen} alt="noticia-imagen" />
      </div>

      <div id="CardNoticiaBody">
        <div id="CardNoticiaTitulos">
          <div id="CardFechaContainer">
            <h1>20</h1>
            <div id="CardFechaContainer-MY">
              <p>Abril</p>
              <p>1990</p>
            </div>
          </div>
          <h4>{noticia.titulo}</h4>
        </div>

        <div id="CardNoticiaDescripcion">
          <p> {noticia.descripcion} </p>
          <a href="."> Seguir leyendo.</a>
        </div>
      </div>

      <div id="CardNoticiaFooter">
        <p>Hace 5 minutos</p>
        <p>50 comentarios</p>
      </div>
    </div>
  );
};

export const CardBig = ({ noticia }) => {
  return (
    <div id="CardNoticiaContainer" style={{ maxWidth: "900px" }}>
      <div id="CardNoticiaBody">
        <div id="CardNoticiaTitulos">
          <h4
            style={{ padding: 0, fontSize: "40px" }}
            className="colorized-font"
          >
            {noticia.titulo}
          </h4>
        </div>

        <div id="CardNoticiaDescripcion">
          <p> {noticia.descripcion} </p>
          <p>
            <strong> {noticia.autor || "Por Benjamin D."} </strong>
          </p>
        </div>
      </div>

      <div id="CardNoticiaInfo" style={{ maxHeight: "900px" }}>
        <p>
          <strong>¡ÚLTIMO MOMENTO!</strong>
        </p>
        <img
          src={noticia.imagen}
          alt="noticia-imagen"
          style={{ maxWidth: "900px", marginTop: "-15%" }}
        />
      </div>
    </div>
  );
};

export const CardXSmall = ({ noticia }) => {
  const primeraPalabra = noticia.titulo.split(" ")[0];
  const restoTitulo = noticia.titulo.split(" ").slice(1).join(" ");

  return (
    <div
      id="CardNoticiaContainer"
      style={{ minHeight: "auto", padding: 0, backgroundColor: "transparent" }}
    >
      <div id="CardNoticiaInfo" style={{ padding: 0, maxHeight: "auto" }}>
        <p>{noticia.categoria}</p>
        <img
          src={noticia.imagen}
          alt="noticia-imagen"
          style={{ maxWidth: "300px" }}
        />
      </div>

      <div id="CardNoticiaBody" style={{ padding: 0 }}>
        <div
          id="CardNoticiaTitulos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "1rem 0",
          }}
        >
          <h4 style={{ padding: "0" }}>
            <strong className="colorized-font">{primeraPalabra}</strong>{" "}
            {restoTitulo}
          </h4>
          <p style={{ padding: 0, margin: 0 }}>
            <strong> {noticia.autor || "Por Benjamin D."} </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export const NoticiasSecundarias = ({ noticias }) => {
  return (
    <Row id="NoticiasSecundariasContainer">
      {noticias.map((noticia, idx) => {
        return <CardSmall key={idx} noticia={noticia} />;
      })}
    </Row>
  );
};

export const NoticiasPricipales = ({ noticias }) => {
  return (
    <Row id="NoticiasSecundariasContainer">
      <CardBig noticia={noticias[0]} />
      <div>
        <CardXSmall noticia={noticias[1]} />
        <CardXSmall noticia={noticias[2]} />
      </div>
    </Row>
  );
};

const BoardNoticias = () => {
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
    <div id="BoardNoticiasContainer">
      <NoticiasPricipales noticias={arrayNoticias} />

      <div className='seccion-publicidad'>
        <Publicidad publicidad={3} />
      </div>

      <NoticiasSecundarias noticias={arrayNoticias} />
    </div>
  );
};

export default BoardNoticias;
