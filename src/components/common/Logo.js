import React from "react";
import LogoNav from "./img/LogoNav.png";
import { Nav } from "react-bootstrap";
import Climate from "./Climate";
import { withRouter } from "react-router-dom";

const Logo = (props) => {
  const home = () => {
    props.history.push("/");
  };

  return (
    <Nav className=" bg5 px-5 py-3 d-flex align-items-center">
      <div className="mr-auto">
        <img src={LogoNav} alt="logo" onClick={() => home()} className="logo-icono-mano"/>
      </div>
      <div>
        <Climate clima={props.clima} />
      </div>
    </Nav>
  );
};

export default withRouter(Logo);
