import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Menudespleg = () => {
    return (
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark" variant="outline-dark mr-3">
        {/* <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> */}
        </Dropdown.Toggle>
    
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default Menudespleg;