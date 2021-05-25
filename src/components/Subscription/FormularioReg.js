import React, { useState } from "react";
import {
  Formulario,
  Label,
  ContenedorTerminos,
  ContenedorBotonCentrado,
  Boton,
  MensajeError,
} from "./Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Swal from "sweetalert2"

const FormularioReg = () => {
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [direccion, setDireccion] = useState({ campo: "", valido: null });
  const [localidad, setLocalidad] = useState({ campo: "", valido: null });
  const [postal, setPostal] = useState({ campo: "", valido: null });
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [telefono, setTelefono] = useState({ campo: "", valido: null });
  const [terminos, setTerminos] = useState(false);
  const [formularioValido, setFormularioValido] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    direccion: /^[a-zA-ZÀ-ÿ\s]{5,80}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    postal: /^\d{3,6}$/,
  };

  const onChangeTerminos = (e) => {
    setTerminos(e.target.checked);
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
      setFormularioValido(true);
      setNombre({ campo: "", valido: null });
      setApellido({ campo: "", valido: null });
      setDireccion({ campo: "", valido: null });
      setLocalidad({ campo: "", valido: null });
      setPostal({ campo: "", valido: null });
      setCorreo({ campo: "", valido: null });
      setTelefono({ campo: "", valido: null });
    } else {
      setFormularioValido(false);
    }
  };

  return (
    <div>
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={nombre}
          cambiarEstado={setNombre}
          tipo="text"
          label="Nombre"
          placeholder="Juan"
          name="usuario"
          leyendaError="El nombre solo puede contener letras y espacios entre 3 a 40 caracteres."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={apellido}
          cambiarEstado={setApellido}
          tipo="text"
          label="Apellido"
          placeholder="Gutierrez"
          name="apellido"
          leyendaError="El nombre solo puede contener letras y espacios entre 3 a 40 caracteres."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={direccion}
          cambiarEstado={setDireccion}
          tipo="text"
          label="Direccion"
          placeholder="Gral. Paz 547"
          name="direccion"
          leyendaError="La direccion solo puede contener letras y espacios entre 5 a 80 caracteres."
          expresionRegular={expresiones.direccion}
        />
        <Input
          estado={localidad}
          cambiarEstado={setLocalidad}
          tipo="text"
          label="Localidad"
          placeholder="San Miguel de Tucumán"
          name="localidad"
          leyendaError="La localidad solo puede contener letras y espacios entre 5 a 80 caracteres."
          expresionRegular={expresiones.direccion}
        />
        <Input
          estado={postal}
          cambiarEstado={setPostal}
          tipo="text"
          label="Postal"
          placeholder="4000"
          name="postal"
          leyendaError="El postal solo puede contener numeros."
          expresionRegular={expresiones.postal}
        />
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
          estado={telefono}
          cambiarEstado={setTelefono}
          tipo="text"
          label="Teléfono (sin espacios y guiones)"
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

export default FormularioReg;
