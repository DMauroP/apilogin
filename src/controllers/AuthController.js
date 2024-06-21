// Importa el modelo de usuario
const Usuario = require('../models/usuarios');

// Función para iniciar sesión
async function iniciarSesion(email, contraseña) {
    try {
        // Buscar al usuario por su correo electrónico
        const usuario = await Usuario.findOne({ email });

        // Si no se encuentra el usuario, devuelve un mensaje de error
        if (!usuario) {
            return { message: "Correo electrónico incorrecto" };
        }

        // Verificar la contraseña
        if (usuario.password !== contraseña) {
            return { message: "Contraseña incorrecta" };
        }

        // Devuelve un mensaje de bienvenida y el tipo de usuario
        return { 
            message: `¡Bienvenido, eres ${usuario.role}!`,
            role: usuario.role
        };
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        return { message: "Ocurrió un error al iniciar sesión" };
    }
}

module.exports = {
    iniciarSesion
};
module.exports = {
    iniciarSesion
};
