import React from "react";

import BannerCovid from "./Inicio/BannerCovid";
import CarouselNoticias from "./Inicio/CarouselNoticias";
import BoardNoticias from "./Inicio/BoardNoticias";

import "./Inicio/inicio.css";

const inicio = () => {
  return (
    <div>
      <BannerCovid />

      <CarouselNoticias />

      <BoardNoticias />
    </div>
  );
};

export default inicio;
