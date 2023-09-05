// Obtén el formulario de inicio de sesión y escucha el evento de envío
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtén los valores del formulario de inicio de sesión
    const loginCorreo = document.getElementById("login-email").value;
    const loginContraseña = document.getElementById("login-password").value;

    // Recupera los usuarios registrados del almacenamiento local
    const usuariosRegistradosJSON = localStorage.getItem("usuariosRegistrados",);
    const usuariosRegistrados = JSON.parse(usuariosRegistradosJSON) || [];

    // Verifica si las credenciales coinciden con algún usuario registrado
    const usuarioEncontrado = usuariosRegistrados.find((usuario) =>
     usuario.correo === loginCorreo && usuario.contraseña === loginContraseña);

    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        // Aquí puedes redirigir al usuario a la página de inicio de sesión exitoso
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtalo nuevamente.");
    }
});
