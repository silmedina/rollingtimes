import React from "react";
import CarouselNoticias from "./CarouselNoticias";
import BoardNoticias from "./BoardNoticias";
import Publicidad from "./Publicidad";
import "./inicio.css";
import Spinner from "../common/Spinner";

const inicio = (props) => {
  return (
    <div id='InicioContainer'>
      <CarouselNoticias noticias={props.noticias} />

      {!props.noticias.length && !props.cargando && (
        <div  className='container d-flex flex-column my-5 align-items-center'>
        <span>Sin Noticias</span>
      </div>
      )}
      {props.cargando && (
        <div  className='container d-flex flex-column my-5 align-items-center'>
          <Spinner></Spinner>
          <span>Cargando...</span>
        </div>
      )}
      {!props.cargando && (
        <BoardNoticias noticias={props.noticias.slice(0, 3)} />
      )}

      <Publicidad publicidad={3} />

      {!props.cargando && (
        <BoardNoticias noticias={props.noticias.slice(3)} />
      )}


    </div>
  );
};

export default inicio;
