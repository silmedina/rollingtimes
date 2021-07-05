import React, { Fragment } from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";

const Categoria = (props) => {

  return (
    <Fragment>
      <Nav
        // fill
        defaultActiveKey="/"
        className="bg5 pt-2 d-flex justify-content-center"
        id="nav"
      >
        <Nav.Item>
          <Nav.Link className="color1 bg5" href="/">
            <p className="mb-0">Home</p>
          </Nav.Link>
        </Nav.Item>

        {props.categorias.map((categoria) => (
          <Nav.Item key={categoria._id}>
            <Nav.Link className="color1 bg5" eventKey={categoria._id} href={`/${categoria.nombre}`}>
              <p className="mb-0">{categoria.nombre}</p>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
     
    </Fragment>
  );
};

export default Categoria;
