function validarFormulario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    let errorNombre = document.getElementById("errorNombre");
    let errorCorreo = document.getElementById("errorCorreo");
    let errorClave = document.getElementById("errorClave");
    let mensajeExito = document.getElementById("mensajeExito");

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorClave.textContent = "";
    mensajeExito.textContent = "";

    let esValido = true;

    if (nombre.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        esValido = false;
    }

    if (correo.trim() === "") {
        errorCorreo.textContent = "El correo es obligatorio.";
        esValido = false;
    }

    if (clave.trim() === "") {
        errorClave.textContent = "La contraseña es obligatoria.";
        esValido = false;
    }

    if (esValido) {
        mensajeExito.textContent = "¡Formulario enviado correctamente!";
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("clave").value = "";
    }
}