import React, { useState, useEffect } from "react";
import BannerCovid from "./Inicio/BannerCovid";
import CarouselNoticias from "./Inicio/CarouselNoticias";
import BoardNoticias from "./Inicio/BoardNoticias";
import "./Inicio/inicio.css";

const Inicio = (props) => {
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

  useEffect(() => {
  buscarDestacadas();
  }, [props.noticias]);

  
  const buscarDestacadas = () => {
    const data = [];
    for (let i in props.noticias) {
      const notasDestacadas = props.noticias[i].destacar;
      if (notasDestacadas === true) {
         data.push(props.noticias[i]) ;
      }
    }
    setNoticiasDestacadas([...data])
  }
  
  console.log(noticiasDestacadas);
  return (
    <div id='InicioContainer'>       
           <CarouselNoticias noticias={noticiasDestacadas}></CarouselNoticias>
      <div style={{ padding: "0.5rem 0" }}>
        <BannerCovid />
      </div>
      <BoardNoticias noticias={props.noticias} />
    </div>
  );
};

export default Inicio;
