function mostrarTexto() {
    let input = document.getElementById("cajaTexto");
    let parrafo = document.getElementById("resultado");

    if (input.value === "") {
        parrafo.textContent = "Esperando que escribas algo...";
    } else {
        parrafo.textContent = input.value;
    }
}