function cambiarApariencia() {
    let seccion = document.getElementById("seccion");
    seccion.classList.add("fondo-cambiado");
    seccion.classList.remove("fondo-original");
}

function restaurarApariencia() {
    let seccion = document.getElementById("seccion");
    seccion.classList.remove("fondo-cambiado");
    seccion.classList.add("fondo-original");
}