import React from "react";
import { Row } from "react-bootstrap";
import Publicidad from "./Publicidad";
import "./boardNoticias.css";
import { Link } from "react-router-dom";

export const CardSmall = ({ noticia = {} }) => {
  return (
    <Link to={'/noticia/' + noticia._id} style={{ textDecoration: "none" }}>
      <div className="col-sm-12 col-md-8" id="CardNoticiaContainer">
        <div className="col-sm-12 col-md-8" id="CardNoticiaInfo">
          <p>{noticia.categoria}</p>
          <img src={noticia.imagen} alt="noticia-imagen" />
        </div>

        <div className="col-sm-12 col-md-8" id="CardNoticiaBody">
          <div id="CardNoticiaTitulos">
            <div id="CardFechaContainer">
              <h1>20</h1>
              <div id="CardFechaContainer-MY">
                <p>Abril</p>
                <p>1990</p>
              </div>
            </div>
            <h4 style={{color: 'rgba(0,0,0,0.85)'}}>{noticia.titulo}</h4>
          </div>

          <div id="CardNoticiaDescripcion">
            <p style={{color: 'rgba(0,0,0,0.85)'}}> {noticia.texto} </p>
            <a href="."> Seguir leyendo.</a>
          </div>
        </div>

        <div id="CardNoticiaFooter">
          <p>Hace 5 minutos</p>
          <p>50 comentarios</p>
        </div>
      </div>
    </Link>
  );
};

export const CardBig = ({ noticia = {} }) => {
  return (
    <Link to={'/noticia/' + noticia._id} style={{ textDecoration: "none" }}>
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
            <p style={{color: 'rgba(0,0,0,0.85)'}}> {noticia.texto} </p>
            <p>
              <strong style={{color: 'rgba(0,0,0,0.85)'}}> {noticia.autor || "Por Benjamin D."} </strong>
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
    </Link>
  );
};

export const CardXSmall = ({ noticia = {} }) => {
  const primeraPalabra = noticia.titulo.split(" ")[0];
  const restoTitulo = noticia.titulo.split(" ").slice(1).join(" ");

  return (
    <Link to={'/noticia/' + noticia._id} style={{ textDecoration: "none" }}>
      <div
        id="CardNoticiaContainer"
        style={{
          minHeight: "auto",
          padding: 0,
          backgroundColor: "transparent",
        }}
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
    </Link>
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

export const NoticiasPricipales = ({ noticias = [] }) => {
  return (
    <Row id="NoticiasSecundariasContainer">
      {noticias[0] && <CardBig noticia={noticias[0]} />}
      <div>
        {noticias[1] && <CardXSmall noticia={noticias[1]} />}
        {noticias[2] && <CardXSmall noticia={noticias[2]} />}
      </div>
    </Row>
  );
};

const BoardNoticias = ({ noticias = [] }) => {
  return (
    <div id="BoardNoticiasContainer">
      <NoticiasPricipales noticias={noticias} />

      <div className="seccion-publicidad">
        <Publicidad publicidad={3} />
      </div>

      <NoticiasSecundarias noticias={noticias.reverse()} />
    </div>
  );
};

export default BoardNoticias;
