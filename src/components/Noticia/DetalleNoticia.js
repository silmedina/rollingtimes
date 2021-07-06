import React, { useEffect, useState } from "react";
import Publicidad from "../Inicio/Publicidad";
import "./detalleNoticia.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Noticia = ({ noticia = {} }) => {
  return (
    <div id="NoticiaContainer" className="flex-column pt-3">
      <button className="btn btn-outline-dark mx-2" ><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Volver</button><p id="CategoriaRoot">Rolling Times - {noticia.categoria}</p>
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
    window.scrollTo(0, 0);
    setNoticia(noticias.find(noti => noti._id === id))
  }, [noticias]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg3 col-sm-12">
      <div id="DetalleNoticiaContainer" className="col-sm-12 col-md-9">
            <Noticia noticia={noticia} />
      </div>
       <div className="pulicidad-section">
       <Publicidad publicidad={1} />
     </div>
    </div>
  );
};

export default DetalleNoticia;
