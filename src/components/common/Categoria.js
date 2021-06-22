import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";

const Categoria = (props) => {
  return (
    <Fragment>
      <Nav
        variant="tabs"
        defaultActiveKey="/"
        className="bg5 pt-2 d-flex justify-content-center"
        id="nav"
      >
        <Nav.Item>
          <Nav.Link className="color1" href="/">
            Home
          </Nav.Link>
        </Nav.Item>

        {props.categorias.map((categoria) => (
          <Nav.Item key={categoria._id}>
            <Nav.Link className="color1" eventKey={categoria._id}>
              {categoria.nombre}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Fragment>
  );
};

export default Categoria;
