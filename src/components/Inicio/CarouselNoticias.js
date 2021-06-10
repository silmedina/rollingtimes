import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./carouselNoticias.css";

const CarouselNoticias = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.noticias.reverse().map((noticia, index) => {
          return (
            <Carousel.Item key={index} id="noticiaContainer">
              <div className="black-gradient-bg" />
              <img
                className="d-block w-100 imagen-noticia"
                src={noticia.imagen}
                alt={"slide" + index}
              />
              <Link to={'/noticia/' + noticia._id} style={{textDecoration: 'none'}}>
                <Carousel.Caption
                  id="noticiaCaption"
                  style={{ cursor: "pointer" }}
                >
                  <div id="noticiaInfo">
                    <p>{noticia.categoria}</p>
                    <p>{noticia.fecha}</p>
                  </div>
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.subtitulo}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselNoticias;
