import React from "react";
import LogoNav from "./img/LogoNav.png";
import { Nav } from "react-bootstrap";
import Climate from "./Climate";

const Logo = (props) => {
  return (
    <Nav className=" bg5 px-5 py-3 d-flex align-items-center">
      <div className="mr-auto">
        <img src={LogoNav} alt="logo" />
      </div>
      <div>
        <Climate clima={props.clima} />
      </div>
    </Nav>
  );
};

export default Logo;
