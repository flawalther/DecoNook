// Obtén el valor ingresado en el campo "Correo Electrónico o Nombre de Usuario"
const emailOrUsername = document.getElementById("emailOrUsername").value;

// Realiza la verificación buscando en tus registros de usuarios
const usuarioEncontrado = usuariosRegistrados.find((usuario) => {
    // Verifica si el valor ingresado coincide con el correo electrónico o el nombre de usuario
    return usuario.correo === emailOrUsername || usuario.nombreUsuario === emailOrUsername;
});

if (usuarioEncontrado) {
    // El usuario ha iniciado sesión con éxito, realiza las acciones correspondientes
} else {
    // Muestra un mensaje de error, indicando que los datos son incorrectos
    alert("Correo Electrónico o Nombre de Usuario incorrecto. Por favor, inténtalo nuevamente.");
}
