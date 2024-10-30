function cambiarContrasena() {
    // Obtener los valores de las contraseñas
    var contrasenaActual = document.getElementById("contrasenaActual").value;
    var nuevaContrasena = document.getElementById("nuevaContrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    // Validar que la nueva contraseña no sea igual a la actual
    if (nuevaContrasena === contrasenaActual) {
        alert("La nueva contraseña no puede ser igual a la contraseña actual.");
        return false; // Detener el envío del formulario
    }

    // Validar que la nueva contraseña y la confirmación sean iguales
    if (nuevaContrasena !== confirmarContrasena) {
        alert("La nueva contraseña y la confirmación no coinciden.");
        return false; // Detener el envío del formulario
    }

    // Si todo está bien, se puede proceder a enviar el formulario
    alert("Contraseña cambiada exitosamente.");
    return true; // Permitir el envío del formulario
}