function agregarElemento() {
    let input = document.getElementById("tarea");
    let texto = input.value;

    if (texto === "") {
        alert("Por favor escriba algo antes de agregar.");
        return;
    }

    let lista = document.getElementById("miLista");

    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto + " ";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "btn-eliminar";

    botonEliminar.onclick = function () {
        nuevoItem.remove();
    };

    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);

    input.value = "";
}