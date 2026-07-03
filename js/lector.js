const lectores = {
    "20260001": {
        nombre: "Ana Quispe Huamán",
        codigo: "20260001",
        carrera: "Ingeniería Informática y Sistemas",
        prestamos: 1,
        estado: "Activo",
        puedePrestar: true,
        alerta: ""
    },

    "20260002": {
        nombre: "Luis Condori Flores",
        codigo: "20260002",
        carrera: "Administración",
        prestamos: 3,
        estado: "Bloqueado",
        puedePrestar: false,
        alerta: "El lector tiene el límite máximo de préstamos activos."
    },

    "DNI12345678": {
        nombre: "Rosa Mamani Apaza",
        codigo: "DNI12345678",
        carrera: "Derecho",
        prestamos: 0,
        estado: "Activo",
        puedePrestar: true,
        alerta: ""
    }
};

const formLector = document.getElementById("formLector");
const codigoLector = document.getElementById("codigoLector");
const mensajeValidacion = document.getElementById("mensajeValidacion");
const resultadoLector = document.getElementById("resultadoLector");

const nombreLector = document.getElementById("nombreLector");
const codigoResultado = document.getElementById("codigoResultado");
const carreraLector = document.getElementById("carreraLector");
const prestamosLector = document.getElementById("prestamosLector");
const estadoLector = document.getElementById("estadoLector");
const alertaLector = document.getElementById("alertaLector");
const btnContinuarPrestamo = document.getElementById("btnContinuarPrestamo");

formLector.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const codigoIngresado = codigoLector.value.trim().toUpperCase();
    const lector = lectores[codigoIngresado];

    mensajeValidacion.textContent = "";
    mensajeValidacion.className = "mensaje";
    resultadoLector.classList.add("oculto");

    if (!lector) {
        mensajeValidacion.textContent =
            "No se encontró un lector con el código o DNI ingresado.";
        mensajeValidacion.classList.add("mensaje-error");
        return;
    }

    nombreLector.textContent = lector.nombre;
    codigoResultado.textContent = lector.codigo;
    carreraLector.textContent = lector.carrera;
    prestamosLector.textContent = lector.prestamos;

    estadoLector.textContent = lector.estado;
    estadoLector.className = "estado";

    if (lector.puedePrestar) {
        estadoLector.classList.add("estado-activo");
        mensajeValidacion.textContent =
            "Lector validado correctamente. Puede continuar con el préstamo.";
        mensajeValidacion.classList.add("mensaje-exito");

        alertaLector.textContent = "";
        alertaLector.className = "alerta";
        btnContinuarPrestamo.disabled = false;
    } else {
        estadoLector.classList.add("estado-bloqueado");
        mensajeValidacion.textContent =
            "El lector fue encontrado, pero no puede realizar nuevos préstamos.";
        mensajeValidacion.classList.add("mensaje-error");

        alertaLector.textContent = lector.alerta;
        alertaLector.className = "alerta alerta-activa";
        btnContinuarPrestamo.disabled = true;
    }

    resultadoLector.classList.remove("oculto");
});

btnContinuarPrestamo.addEventListener("click", function () {
    alert("Lector validado. En el siguiente módulo se registrará el préstamo.");
});