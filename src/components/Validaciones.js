const validarNombre = (nombre) =>{
    const expresion = /^[a-zA-ZÀ-ÿ\s]/;
    if(nombre.trim() !== '' && expresion.test(nombre) ){
        return true;
    }else{
        return false;
    }
};
const validarApellido = (apellido) =>{
    const expresion = /^[a-zA-ZÀ-ÿ\s]/;
    if(apellido.trim() !== '' && expresion.test(apellido)){
        return true;
    }else{
        return false;
    }
};
const validarEmail= (email) => {
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && expresion.test(email)) {
        return true;
    } else {
        return false;
    }
};
const validarLocalidad = (localidad) =>{
    const expresion = /^[a-zA-ZÀ-ÿ\s]{6,30}$/;
    if(localidad.trim() !== '' && expresion.test(localidad)){
        return true;
    }else{
        return false;
    }
};
const validarDireccion = (direccion) =>{
    const expresion = /^[a-zA-Z0-9À-ÿ\s]{6,30}$/;
    if(direccion.trim() !== '' && expresion.test(direccion)){
        return true;
    }else{
        return false;
    }
};
const validarPostal = (postal) =>{
    const expresion = /^[0-9]{3,5}$/;
    if(postal.trim() !== '' && expresion.test(postal)){
        return true;
    }else{
        return false;
    }
};
const validarTelefono = (telefono) =>{
    const expresion = /^[0-9]$/;
    if(telefono.trim() !== '' && expresion.test(telefono)){
        return true;
    }else{
        return false;
    }
};
const validarTextArea = (textArea) =>{
    const expresion = /^[a-zA-ZÀ-ÿ\s]{10,250}/;
    if(textArea.trim() !== '' && expresion.test(textArea)){
        return true;
    }else{
        return false;
    }
};
const validarConsulta = (tipoConsulta) =>{
    if(tipoConsulta!== ''){
        return true;
    }else{
        return false;
    }
}
export {validarNombre, validarEmail, validarTextArea, validarConsulta};