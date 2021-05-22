import React, { useState } from "react";
import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "./Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Swal from "sweetalert2"

const FormularioM = () => {
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [localidad, cambiarLocalidad] = useState({ campo: "", valido: null });
  const [postal, cambiarPostal] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    direccion: /^[a-zA-ZÀ-ÿ\s]{5,80}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    postal: /^\d{3,6}$/,
  };

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === "true" &&
      apellido.valido === "true" &&
      direccion.valido === "true" &&
      localidad.valido === "true" &&
      postal.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      terminos
    ) {
      cambiarFormularioValido(true);
      cambiarNombre({ campo: "", valido: null });
      cambiarApellido({ campo: "", valido: null });
      cambiarDireccion({ campo: "", valido: null });
      cambiarLocalidad({ campo: "", valido: null });
      cambiarPostal({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <div>
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Nombre"
          placeholder="John Doe"
          name="usuario"
          leyendaError="El nombre solo puede contener letras y espacios entre 3 a 40 caracteres."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={apellido}
          cambiarEstado={cambiarApellido}
          tipo="text"
          label="Apellido"
          placeholder="John Doe"
          name="apellido"
          leyendaError="El nombre solo puede contener letras y espacios entre 3 a 40 caracteres."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={direccion}
          cambiarEstado={cambiarDireccion}
          tipo="text"
          label="Direccion"
          placeholder="John Doe"
          name="direccion"
          leyendaError="La direccion solo puede contener letras y espacios entre 5 a 80 caracteres."
          expresionRegular={expresiones.direccion}
        />
        <Input
          estado={localidad}
          cambiarEstado={cambiarLocalidad}
          tipo="text"
          label="Localidad"
          placeholder="John Doe"
          name="localidad"
          leyendaError="La localidad solo puede contener letras y espacios entre 5 a 80 caracteres."
          expresionRegular={expresiones.direccion}
        />
        <Input
          estado={postal}
          cambiarEstado={cambiarPostal}
          tipo="text"
          label="Postal"
          placeholder="4000"
          name="postal"
          leyendaError="El postal solo puede contener numeros."
          expresionRegular={expresiones.postal}
        />
        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
        />
        <Input
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Teléfono"
          placeholder="3813242445"
          name="telefono"
          leyendaError="El telefono solo puede contener numeros entre 7 a 14 dígitos."
          expresionRegular={expresiones.telefono}
        />

        <ContenedorTerminos>
          <Label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terminos}
              onChange={onChangeTerminos}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>
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

export default FormularioM;
