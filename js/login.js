const formularioLogin = document.getElementById("formLogin");
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("contrasena");
const mensajeLogin = document.getElementById("mensajeLogin");
const botonVerPassword = document.getElementById("verPassword");

botonVerPassword.addEventListener("click", function () {
    const esPassword = inputContrasena.type === "password";

    inputContrasena.type = esPassword ? "text" : "password";
    botonVerPassword.textContent = esPassword ? "🙈" : "👁";
    botonVerPassword.title = esPassword
        ? "Ocultar contraseña"
        : "Mostrar contraseña";
});

formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = inputUsuario.value.trim().toLowerCase();
    const contrasena = inputContrasena.value.trim();

    mensajeLogin.textContent = "";
    mensajeLogin.className = "mensaje-login";

    const usuariosValidos = [
        {
            usuario: "admin",
            correo: "admin@bibliotech.pe",
            contrasena: "admin123",
            rol: "Administrador"
        },
        {
            usuario: "colaborador",
            correo: "colaborador@bibliotech.pe",
            contrasena: "colab123",
            rol: "Colaborador"
        }
    ];

    const usuarioEncontrado = usuariosValidos.find(function (usuarioSistema) {
        const usuarioCorrecto =
            usuario === usuarioSistema.usuario ||
            usuario === usuarioSistema.correo;

        return usuarioCorrecto && contrasena === usuarioSistema.contrasena;
    });

    if (usuarioEncontrado) {
        mensajeLogin.textContent =
            "Inicio de sesión correcto. Bienvenido, " +
            usuarioEncontrado.rol +
            ".";

        mensajeLogin.classList.add("exito");

        setTimeout(function () {
            alert(
                "Acceso concedido.\nRol: " + usuarioEncontrado.rol
            );

            // Más adelante puedes redirigir según el rol:
            // window.location.href = "dashboard.html";
        }, 300);

    } else {
        mensajeLogin.textContent =
            "Usuario o contraseña incorrectos.";

        mensajeLogin.classList.add("error");
        inputContrasena.value = "";
        inputContrasena.focus();
    }
});