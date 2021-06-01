import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2"

const FormularioLog = () => {
    const [correo, setCorreo] = useState({ campo: "", valido: null });
    const [contrasenia, setContrasenia] = useState({ campo: "", valido: null });
    const [formularioValido, setFormularioValido] = useState(null);
  
    const expresiones = {
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (
        correo.valido === "true"
      ) {
        setFormularioValido(true);
        setCorreo({ campo: "", valido: null });
      } else {
        setFormularioValido(false);
      }
    };

    return (
        <div>
            <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={correo}
          cambiarEstado={setCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="juan.gutierrez@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
        />
        <Input
          estado={contrasenia}
          cambiarEstado={setContrasenia}
          tipo="password"
          label="Contraseña"
          placeholder="***"
          name="Password"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
        />
        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            )
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </div>
    );
};

export default FormularioLog;