import React from "react";
import { Table } from "react-bootstrap";

const Cotizacion = (props) => {

  return (
    <Table bordered hover size="sm" className="bg5 text-center m-0">
      <thead className="">
        <tr>
          {props.dolar.compra ? (
            <th>
              Dolar: Compra {props.dolar.compra} Venta {props.dolar.venta}
            </th>
          ) : null}
          {props.euro.compra ? (
            <th>
              Euro: Compra {props.euro.compra} Venta {props.euro.venta}
            </th>
          ) : null}
          {props.real.compra ? (
            <th>
              Real: Compra {props.real.compra} Venta {props.real.venta}
            </th>
          ) : null}
        </tr>
      </thead>
    </Table>
  );
};

export default Cotizacion;
