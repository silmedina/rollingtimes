import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./carouselNoticias.css";

const CarouselNoticias = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const arrayNoticias = [
    {
      imagen:
        "https://phantom-marca.unidadeditorial.es/fc835a6118e35943cf4303d1f34f4f6e/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/05/16228915657697.jpg",
      titulo: "Colon Campeon KING",
      descripcion: "Pulga te amo, negrito salao.",
    },

    {
      imagen:
        "https://telesoldiario.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-01-at-16.54.12-1.jpeg",
      titulo: "Gallardo tiene un Clon, 'Boca', exclamó.",
      descripcion: "Al video me lo paso adri.",
    },

    {
      imagen: "https://i.ytimg.com/vi/uP9uw-mlNic/maxresdefault.jpg",
      titulo: "El topo se murió",
      descripcion: "'Come aca que vua mori io'.",
    },
  ];

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {arrayNoticias.map((noticia, index) => {
          return (
            <Carousel.Item key={index} id="noticiaContainer">
              <div className="black-gradient-bg" />
              <img
                className="d-block w-100 imagen-noticia"
                src={noticia.imagen}
                alt={"slide" + index}
              />
              <Carousel.Caption id="noticiaCaption" style={{cursor: 'pointer'}}>
                <div id="noticiaInfo">
                  <p>{"categoría"}</p>
                  <p>{"fecha"}</p>
                </div>
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcion}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselNoticias;
