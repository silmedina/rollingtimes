import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./boardNoticias.css";

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
      <CardGroup>
        {arrayNoticias.map((noticia) => {
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
                  <a href='.'> Seguir leyendo.</a>
                </div>
              </div>

              <div id="CardNoticiaFooter">
                <p>Hace 5 minutos</p>
                <p>50 comentarios</p>
              </div>
            </div>
          );
        })}
      </CardGroup>
    </div>
  );
};

export default BoardNoticias;
