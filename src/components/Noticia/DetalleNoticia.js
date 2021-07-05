import React, { useEffect, useState } from "react";
import Publicidad from "../Inicio/Publicidad";
import "./detalleNoticia.css";
import { useParams } from "react-router-dom";

export const Noticia = ({ noticia = {} }) => {
  return (
    <div id="NoticiaContainer" className="flex-column pt-3">
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
    <div className="col-sm-12">
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
