const validarNombre = (nombre) => {
  const expresion = /^[a-zA-ZÀ-ÿ\s]/;
  if (nombre.trim() !== "" && expresion.test(nombre)) {
    return true;
  } else {
    return false;
  }
};
const validarApellido = (apellido) => {
  const expresion = /^[a-zA-ZÀ-ÿ\s]/;
  if (apellido.trim() !== "" && expresion.test(apellido)) {
    return true;
  } else {
    return false;
  }
};
const validarDireccion = (direccion) => {
  const expresion = /^[a-zA-Z0-9À-ÿ\s]/;
  if (direccion.trim() !== "" && expresion.test(direccion)) {
    return true;
  } else {
    return false;
  }
};
const validarLocalidad = (localidad) => {
  const expresion = /^[a-zA-ZÀ-ÿ\s]/;
  if (localidad.trim() !== "" && expresion.test(localidad)) {
    return true;
  } else {
    return false;
  }
};
const validarPostal = (postal) => {
  const expresion = /^[0-9]/;
  if (postal.trim() !== "" && expresion.test(postal) && postal.length === 4) {
    return true;
  } else {
    return false;
  }
};
const validarEmail = (email) => {
  const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && expresion.test(email)) {
    return true;
  } else {
    return false;
  }
};
const validarTelefono = (telefono) => {
  const expresion = /^[0-9]/;
  if (telefono.trim() !== "" && expresion.test(telefono)) {
    return true;
  } else {
    return false;
  }
};
const validarTextArea = (textArea) => {
  const expresion = /^[a-zA-ZÀ-ÿ\s]{10,250}/;
  if (textArea.trim() !== "" && expresion.test(textArea)) {
    return true;
  } else {
    return false;
  }
};
const validarConsulta = (tipoConsulta) => {
  if (tipoConsulta !== "") {
    return true;
  } else {
    return false;
  }
};

const validarNombreCategoria = (nombreCategoria) => {
  if (nombreCategoria.trim() === '') {
    return {esValido:false , mensaje:'Debe ingresar un nombre de categoria'}
  }

  if (nombreCategoria.trim().length > 35) {
    return {esValido:false , mensaje:'Debe ingresar una categoria de menos de 30 caracteres'}
  }

  const expresion = /^[a-zA-Z\s]*$/; 
  if (!expresion.test(nombreCategoria)) {    
    return {esValido:false , mensaje:'Debe ingresar caracteres validos para el nombre de categoria'}
  }

  return {esValido:true , mensaje:'Nombre valido'}  
}

export {
  validarNombre,
  validarApellido,
  validarDireccion,
  validarLocalidad,
  validarPostal,
  validarTelefono,
  validarEmail,
  validarTextArea,
  validarConsulta,
  validarNombreCategoria
};
