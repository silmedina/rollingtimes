import React from "react";

import BannerCovid from "./Inicio/BannerCovid";
import CarouselNoticias from "./Inicio/CarouselNoticias";
import BoardNoticias from "./Inicio/BoardNoticias";

import "./Inicio/inicio.css";

const inicio = (props) => {
  return (
    <div id='InicioContainer'>
      <CarouselNoticias noticias={props.noticias} />

      <div style={{ padding: "0.5rem 0" }}>
        <BannerCovid />
      </div>

      <BoardNoticias noticias={props.noticias} />
    </div>
  );
};

export default inicio;
