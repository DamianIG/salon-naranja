// 1. Seleccionamos el formulario
const formularioContacto = document.querySelector('.formulario');

formularioContacto.addEventListener('submit', function(evento) {
    // Frenamos la recarga automática de la página
    evento.preventDefault();

    // 2. Capturamos los valores ingresados y limpiamos espacios extremos con .trim()
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const tipoEvento = document.getElementById('evento').options[document.getElementById('evento').selectedIndex].text;
    const mensaje = document.getElementById('mensaje').value.trim();

    // ==========================================
    // 🛡️ BLOQUE DE VALIDACIÓN EN JAVASCRIPT
    // ==========================================

    // Validación 1: Verificar que el nombre no esté vacío
    if (nombre === "") {
        alert("⚠️ Por favor, ingresa tu nombre y apellido.");
        document.getElementById('nombre').focus(); // Lleva el cursor directamente al campo
        return; // Detiene la ejecución de la función aquí
    }

    // Validación 2: Verificar que el correo no esté vacío y contenga una '@'
    if (email === "" || !email.includes("@")) {
        alert("⚠️ Por favor, ingresa un correo electrónico válido (debe incluir '@').");
        document.getElementById('email').focus();
        return;
    }

    // Validación 3: Verificar que el mensaje tenga al menos 10 caracteres
    if (mensaje.length < 10) {
        alert("⚠️ Por favor, escribe un mensaje de consulta un poco más detallado (mínimo 10 caracteres).");
        document.getElementById('mensaje').focus();
        return;
    }

    // ==========================================
    // 📲 SI PASA LAS VALIDACIONES, ENVÍA A WHATSAPP
    // ==========================================

    const telefonoSalon = "543705135518"; // Número de WhatsApp del salón (sin espacios ni símbolos)

    const textoMensaje = `Hola, he visitado su sitio web Salon Naranja, 
                            y me gustaria consultar fecha disponible para un evento de: *${tipoEvento}*.\n\n` +
                         `*Datos del cliente:*\n` +
                         `- Nombre: ${nombre}\n` +
                         `- Teléfono: ${telefono !== "" ? telefono : "No especificado"}\n` +
                         `- Correo: ${email}\n` +
                         `- Mensaje adicional: ${mensaje}`;

    const mensajeURL = encodeURIComponent(textoMensaje);
    const urlWhatsApp = `https://wa.me/${telefonoSalon}?text=${mensajeURL}`;

    // Abrimos WhatsApp
    window.open(urlWhatsApp, '_blank');
});