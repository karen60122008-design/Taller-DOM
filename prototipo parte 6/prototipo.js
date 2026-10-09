function agendarCita(event) {
    event.preventDefault();

    let paciente = document.getElementById("paciente").value;
    let documento = document.getElementById("documento").value;
    let especialidad = document.getElementById("especialidad").value;

    let errorPaciente = document.getElementById("errorPaciente");
    let errorDocumento = document.getElementById("errorDocumento");
    let errorEspecialidad = document.getElementById("errorEspecialidad");
    let mensajeReserva = document.getElementById("mensajeReserva");

    errorPaciente.textContent = "";
    errorDocumento.textContent = "";
    errorEspecialidad.textContent = "";
    mensajeReserva.style.display = "none";

    let esValido = true;

    if (paciente.trim() === "") {
        errorPaciente.textContent = "Ingrese el nombre del afiliado.";
        esValido = false;
    }

    if (documento.trim() === "") {
        errorDocumento.textContent = "Ingrese el documento del afiliado.";
        esValido = false;
    }

    if (especialidad === "") {
        errorEspecialidad.textContent = "Seleccione una especialidad médica.";
        esValido = false;
    }

    if (esValido) {
        mensajeReserva.style.display = "block";
        mensajeReserva.textContent = "Cita agendada con éxito para " + paciente + " en la especialidad de " + especialidad + ".";

        document.getElementById("paciente").value = "";
        document.getElementById("documento").value = "";
        document.getElementById("especialidad").value = "";
    }
}