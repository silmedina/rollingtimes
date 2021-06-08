import React from "react";

import BannerCovid from "./Inicio/BannerCovid";
import CarouselNoticias from "./Inicio/CarouselNoticias";
import BoardNoticias from "./Inicio/BoardNoticias";

import "./Inicio/inicio.css";

const inicio = () => {
  return (
    <div id='InicioContainer'>
      <CarouselNoticias />

      <div style={{ padding: "2rem 0" }}>
        <BannerCovid />
      </div>

      <BoardNoticias />
    </div>
  );
};

export default inicio;
