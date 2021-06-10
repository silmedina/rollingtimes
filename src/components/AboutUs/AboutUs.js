import React from "react";
import AboutUsCard from "./AboutUsCard";
import "./AboutUs.css";
import SIL from "../../assets/SIL.jpg";
import BENJA from "../../assets/BENJA.jpeg";
import DAVID from "../../assets/DAVID.jpg";
import TULIO from "../../assets/TULIO.jpeg";

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
                width={"14rem"}
              />
            </div>

            <div className="m-3">
              <AboutUsCard
                image={TULIO}
                title="Tulio"
                text1="Developer"
                text2="Frase"
                width={"13rem"}
              />
            </div>
            <div className="m-3">
              <AboutUsCard
                image={DAVID}
                title="David Sarhid"
                text1="Developer"
                text2="Frase"
                width={"14rem"}
              />
            </div>
            <div className="m-3">
              <AboutUsCard
                image={BENJA}
                title="Benjamín Draniczarek"
                text1="Developer"
                text2='Frase '
                width={"14rem"}
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
