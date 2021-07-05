import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./carouselNoticias.css";
import Moment from 'moment';

const CarouselNoticias = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const formatearFecha = (fecha) => {
    Moment.locale('es');
    let fechaFormateada = Moment(fecha).format('LLLL');
    return fechaFormateada;
  }

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.noticias.map((noticia, index) => {
          return (
            <Carousel.Item key={index} id="noticiaContainer">
              <img
                className="d-block w-100"
                src={noticia.imagen}
                alt={"slide" + index}
              />
              <Link to={'/noticia/' + noticia._id} style={{textDecoration: 'none'}}>
                <Carousel.Caption
                  id="noticiaCaption"
                  style={{ cursor: "pointer" }}
                >
                  <div id="noticiaInfo">
                    <p className="noticiaInfo">{noticia.categoria}&nbsp;</p>
                    <p className="noticiaInfo">&nbsp;{formatearFecha(noticia.fecha)}</p>
                  </div>
                 <div className="titulo-carousel">
                   <p>{noticia.titulo}</p>
                  </div> 
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
