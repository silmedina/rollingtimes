import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import BannerCovid from "./Inicio/BannerCovid";
import CarouselNoticias from "./Inicio/CarouselNoticias";
import BoardNoticias from "./Inicio/BoardNoticias";

import "./Inicio/inicio.css";



const Inicio = (props) => {
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

  useEffect(() => {
  buscarDestacadas();

  });

  // console.log(props.noticias);
  // console.log(props.noticias[5].destacar);
  // for(let i=0; i <= props.noticias.length; i++ )

  // const buscarDestacadas =  () => {
  //   for (let i in props.noticias) {
  //     console.log(i);
  // console.log(props.noticias[i].destacar);
  //     const getDestacadas = props.noticias[i].destacar;
  //     if (destacarNoticia <= 2 && getDestacadas === true) {
  //       const data = props.noticias[i]

  //       setDestacarNoticia(data)
  //       console.log(data);
  //     }
  //   }
  // }
  console.log(props.noticias.length);
  const noticiasDes = [];

  const buscarDestacadas = async () => {
    const arrayNoticias = await props.noticias;
    for (let i in arrayNoticias) {
      const notasDestacadas = props.noticias[i].destacar;
      if (notasDestacadas === true) {
        const data = props.noticias[i];

        console.log(data);
        // setNoticiasDestacadas(data)

      }
    }
  }
  
  // console.log(noticiasDestacadas);
  return (
    <div id='InicioContainer'>       
           <CarouselNoticias noticias={props.noticias}></CarouselNoticias>
      <div style={{ padding: "0.5rem 0" }}>
        <BannerCovid />
      </div>
      <BoardNoticias noticias={props.noticias} />
    </div>
  );
};

export default Inicio;
