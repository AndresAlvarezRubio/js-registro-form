window.onload=()=> {

    let form = document.querySelector("form");
    form.nombre.addEventListener("input",validarNombre);
    form.apellidos.addEventListener("input",validarApellidos);
    form.edad.addEventListener("input",validarEdad);
    form.telefono.addEventListener("input",validarTelefono);
    form.direccion.addEventListener("input",validarDireccion);
    form.email.addEventListener("input",validarEmail);
    form.contrasenia1.addEventListener("input",validarContrasenia1);
    form.contrasenia2.addEventListener("input",validarContrasenia2);
    form.eliminar.addEventListener("click", ()=> {

        inputs = document.querySelectorAll("input"); 
        let mensajeError = document.querySelectorAll(".mensaje-error");

        inputs.forEach(element => {

            element.classList.remove("errorInput");
            element.classList.remove("validoInput");
        })
        mensajeError.forEach(mensaje=>{

            mensaje.textContent="";
        })

    });
    form.registrar.addEventListener("input",validarRegistrar);

}
validarFormulario();

function validarFormulario() {

    if (validarNombre() && validarApellidos() && validarEdad() && validarTelefono() && validarDireccion() && validarEmail() && validarContrasenia1() && validarContrasenia2()) {
        
        return true;
        
    } else {
        
        return false;
    }
}




function validarNombre() {
    
    let nombre = document.querySelector("#nombre");
    let msnError = document.querySelector("#errorNombre");

    if(!nombre.value.trim()){

        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput")
        msnError.textContent="El nombre es obligatorio";
        return false;
        
    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
        
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput")
        msnError.textContent="El nombre solo puede contener letras y espacios";
        return false;

    }else {
        
        nombre.classList.remove("errorInput");
        nombre.classList.add("validoInput")
        msnError.textContent="";
    }
}

function validarApellidos() {

    let apellidos = document.querySelector("#apellidos");
    let msnError = document.querySelector("#errorApellido");

    if(!apellidos.value.trim()){

        apellidos.classList.add("errorInput");
        apellidos.classList.remove("validoInput")
        msnError.textContent="Los apellidos son necesarios";
        return false;
        
    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidos.value)) {
        
        apellidos.classList.add("errorInput");
        apellidos.classList.remove("validoInput")
        msnError.textContent="Los apellidos solo puede contener letras y espacios";
        return false;

    }else {
        
        apellidos.classList.remove("errorInput");
        apellidos.classList.add("validoInput")
        msnError.textContent="";
    }

}

function validarEdad() {
    
    let telefono=document.querySelector("#telefono");
    let msnError=document.querySelector("#errorEdad")

    if (isNaN(edad.value) || !edad.value.trim()) {

        edad.classList.add("errorInput");
        edad.classList.remove("validoInput")
        msnError.textContent="Carácteres no válidos";
        return false;

    } else if(edad.value<=18 || edad.value>=120) {

        edad.classList.add("errorInput");
        edad.classList.remove("validoInput")
        msnError.textContent="Edad no permitida";
        return false;

    } else {

        edad.classList.remove("errorInput");
        edad.classList.add("validoInput")
        msnError.textContent="";
    }
}

function validarTelefono() {
    
    let telefono=document.querySelector("#telefono");
    let msnError=document.querySelector("#errorTelefono")

    if (isNaN(telefono.value) || !telefono.value.trim()) {

        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput")
        msnError.textContent="Carácteres no válidos";
        return false;

    } else if(!/^[6789]\d{8}$/.test(telefono.value)) {

        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput")
        msnError.textContent="El teléfono debe empezar por 6, 7, 8 o 9. Además de tener 9 caracteres";
        return false;

    } else {

        telefono.classList.remove("errorInput");
        telefono.classList.add("validoInput")
        msnError.textContent="";
    }
}

function validarDireccion() {
    
    let direccion=document.querySelector("#direccion");
    let msnError=document.querySelector("#errorDireccion")

    if (!direccion.value.trim()) {

        direccion.classList.add("errorInput");
        direccion.classList.remove("validoInput")
        msnError.textContent="Este campo es obligatorio";
        return false;

    }
}

function validarEmail() {
    
    let email = document.querySelector("#email");
    let msnError = document.querySelector("#errorEmail");

    if(!email.value.trim()){

        email.classList.add("errorInput");
        email.classList.remove("validoInput")
        msnError.textContent="El email es necesario";
        return false;
        
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
        
        email.classList.add("errorInput");
        email.classList.remove("validoInput")
        msnError.textContent="Email no válido";
        return false;

    }else {
        
        email.classList.remove("errorInput");
        email.classList.add("validoInput")
        msnError.textContent="";
    }

}

function validarContrasenia1() {
    
    let contrasenia = document.querySelector("#contrasenia1");
    let msnError = document.querySelector("#errorContrasenia1");

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(contrasenia.value)) {
        
        contrasenia.classList.add("errorInput");
        contrasenia.classList.remove("validoInput")
        msnError.textContent="Minima de 8 caracteres: al menos 1 mayúscula, 1 minúscula, 1 número";
        return false;

    }else {
        
        contrasenia.classList.remove("errorInput");
        contrasenia.classList.add("validoInput")
        msnError.textContent="";
    }   
}
function validarContrasenia2() {
    let contrasenia1 = document.querySelector("#contrasenia1");
    let contrasenia2 = document.querySelector("#contrasenia2");
    let msnError = document.querySelector("#errorContrasenia2");

    if(contrasenia1.value!==contrasenia2.value) {

        contrasenia2.classList.add("errorInput");
        contrasenia2.classList.remove("validoInput")
        msnError.textContent="Las contraseñas no coinciden";
        return false;

    } else if (contrasenia1.value==contrasenia2.value){

        contrasenia2.classList.remove("errorInput");
        contrasenia2.classList.add("validoInput")
        msnError.textContent="";
    }

}
