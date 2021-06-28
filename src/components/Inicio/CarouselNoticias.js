import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./carouselNoticias.css";

const CarouselNoticias = (props) => {
  // const [index, setIndex] = useState(0);
  // const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  console.log(props.noticias)


  return (
          // <Carousel.Item id="noticiaContainer">
          //   <img
          //     className="d-block w-100 imagen-noticia"
          //     src={props.destacarNoticia.imagen}
          //     alt=""
          //   />
          //   <Link to={'/noticia/' + props.destacarNoticia._id} style={{ textDecoration: 'none' }}>
          //     <Carousel.Caption
          //       id="noticiaCaption"
          //       style={{ cursor: "pointer" }}
          //     >
          //       <div id="noticiaInfo">
          //         <p>{props.destacarNoticia.categoria}</p>
          //         <p>{props.destacarNoticia.fecha}</p>
          //       </div>
          //       <h3>{props.destacarNoticia.titulo}</h3>
          //       <small className="mt-5">{props.destacarNoticia.subtitulo}</small>
          //     </Carousel.Caption>
          //   </Link>
          // </Carousel.Item>
    
<div></div>
   


  //     {/* <Carousel activeIndex={index} onSelect={handleSelect}> */ }
  // {/* {
  //       props.noticias.map((destacarNoticia, index) => {
  //         return (
  //           <Carousel.Item key={index} id="noticiaContainer"> */}
  // {/* <div className="black-gradient-bg" /> este renglon estaba comentado*/ }
  // {/* <img
  //               className="d-block w-100 imagen-noticia"
  //               src={destacarNoticia.imagen}
  //               alt={"slide" + index}
  //             />
  //             <Link to={'/noticia/' + destacarNoticia._id} style={{textDecoration: 'none'}}>
  //               <Carousel.Caption
  //                 id="noticiaCaption"
  //                 style={{ cursor: "pointer" }}
  //               >
  //                 <div id="noticiaInfo">
  //                   <p>{destacarNoticia.categoria}</p>
  //                   <p>{destacarNoticia.fecha}</p>
  //                 </div>
  //                 <h3>{destacarNoticia.titulo}</h3>
  //                 <small className="mt-5">{destacarNoticia.subtitulo}</small>
  //               </Carousel.Caption>
  //             </Link>
  //           </Carousel.Item>
  //         );
  //       })}
  //     </Carousel> */}
    
  );
};

export default CarouselNoticias;
