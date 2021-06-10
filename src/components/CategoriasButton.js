import React, { Fragment } from 'react';


const CategoriasButton = (cat) => {

    return (
        <Fragment>
            <option>{cat.categoria.nombre}</option>
        
                 {/* <Form.Select aria-label="Default select example">
                    <option>{props.categoria.nombre}</option>
                 </Form.Select> */}

            
            
        </Fragment>
    );
};

export default CategoriasButton;