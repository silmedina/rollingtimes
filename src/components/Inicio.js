import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import BannerCovid from "./Inicio/BannerCovid";
import CarouselNoticias from "./Inicio/CarouselNoticias";
import BoardNoticias from "./Inicio/BoardNoticias";

import "./Inicio/inicio.css";



const Inicio = (props) => {
  const [destacarNoticia, setDestacarNoticia] = useState([]);

  console.log(props.noticias);
  // console.log(props.noticias[5].destacar);
  // for(let i=0; i <= props.noticias.length; i++ )
  const buscarDestacadas =  () => {
    for (let i in props.noticias) {
      console.log(i);
      // console.log(props.noticias[i].destacar);
      const getDestacadas = props.noticias[i].destacar;
      if (destacarNoticia <= 2 && getDestacadas === true) {
        const data =[ props.noticias[i]]
     
        setDestacarNoticia(data)
        console.log(data);
      }
    }
  }


  console.log(destacarNoticia);

  buscarDestacadas();


  return (
    <div id='InicioContainer'>
    
      <Carousel>
        {
          props.noticias.map((nota) => <CarouselNoticias noticias={destacarNoticia}></CarouselNoticias>)
        }
      </Carousel>

      <div style={{ padding: "0.5rem 0" }}>
        <BannerCovid />
      </div>

      <BoardNoticias noticias={props.noticias} />
    </div>
  );
};

export default Inicio;
