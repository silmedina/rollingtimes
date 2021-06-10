import React from "react";
import { Table } from "react-bootstrap";

const Cotizacion = (props) => {

  return (
    <Table bordered hover size="sm" className="bg5 text-center m-0">
      <thead>
        <tr className="d-flex ">
          {props.dolar.compra ? (
            <th className="d-flex justify-content-center flex-fill bd-highlight pt-2">
              <div className="d-flex">
                <h5 className="color2 mr-1">Dolar:</h5> 
                <p className="color4 mr-2"> Compra </p> 
                {props.dolar.compra}
                </div>
              <p>,</p>
              <div className="d-flex">
                <p className="color4 px-2">  Venta</p>
                 {props.dolar.venta}
                 </div>
            </th>
          ) : null}
          {props.euro.compra ? (
            <th className="d-flex justify-content-center flex-fill bd-highlight pt-2">
              <div className="d-flex"><h5 className="color2 mr-1">Euro:</h5> <p className="color4 mr-2"> Compra </p> {props.euro.compra}</div>
              <p>,</p>
              <div className="d-flex"><p className="color4 px-2">  Venta</p> {props.euro.venta}</div>
            </th>
          ) : null}
          {props.real.compra ? (
            <th className="d-flex justify-content-center flex-fill bd-highlight pt-2">
              <div className="d-flex"><h5 className="color2 mr-1">Real:</h5> <p className="color4 mr-2"> Compra </p> {props.real.compra}</div>
              <p>,</p>
              <div className="d-flex"><p className="color4 px-2">  Venta</p> {props.real.venta}</div>
            </th>
          ) : null}
        </tr>
      </thead>
    </Table>
  );
};

export default Cotizacion;
