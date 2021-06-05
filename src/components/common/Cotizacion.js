import React from 'react';
import { Navbar, Nav, Table, Button, NavDropdown } from 'react-bootstrap';


const Cotizacion = () => {
    // Consultar api

    return (

        <Table bordered hover size="sm"  className='bg5 text-center m-0'>
            <thead className=''>
                <tr>
                    <th>Dolar: 145</th>
                    <th>Euro: 166</th>
                    <th>Bitcoin: 32k</th>
                    <th>Ethe: 32k</th>
                    <th>Dolar: 145</th>
                    <th>Euro: 166</th>
                    <th>Bitcoin: 32k</th>
                    <th>Ethe: 32k</th>
                </tr>
            </thead>
        </Table>

    );
};

export default Cotizacion;