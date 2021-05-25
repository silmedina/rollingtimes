import React from "react";
import AboutUsCard from "./AboutUsCard";
import "./AboutUs.css";
import SIL from "../../assets/SIL.jpg";
import img1 from "../../assets/imgPorDefecto.png";
import DAVID from "../../assets/DAVID.jpg";

const AboutUs = () => {
  return (
    <div className="text-center">
      <div className="bg-aboutTop">
        <h1 className="py-5">Acerca de nosotros</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row justify-content-center">
            <div className="m-3">
              <AboutUsCard
                image={SIL}
                title="Sil Medina"
                text1="Developer"
                text2='Customer Cure Representative and QA trainee at Rollingcode "Se un punto de referencia de calidad" '
                width={"16rem"}
              />
            </div>

            <div className="m-3">
              <AboutUsCard
                image={img1}
                title="Tulio"
                text1="Developer"
                text2="Frase"
                width={"13.5rem"}
              />
            </div>
            <div className="m-3">
              <AboutUsCard
                image={DAVID}
                title="David Sarhid"
                text1="Developer"
                text2="Frase"
                width={"13.5rem"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-aboutBottom"></div>
    </div>
  );
};

export default AboutUs;
