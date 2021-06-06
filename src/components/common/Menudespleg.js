import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menudespleg = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button" variant="" className="mr-3">
        <h3>
          <FontAwesomeIcon icon={faBars} id="barrasIcon"></FontAwesomeIcon>
        </h3>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {props.categorias.map((categoria) => (
          <Dropdown.Item href="/">
            {categoria.nombre}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menudespleg;
