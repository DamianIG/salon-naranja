// 1. Convertimos la lista de imágenes en un Array manejable
const imagenesGaleria = Array.from(document.querySelectorAll('.galeria-grid img'));
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-imagen');
const modalTitulo = document.getElementById('modal-titulo');
const btnCerrar = document.getElementById('modal-cerrar');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');

// Variable que guarda la posición de la foto que se está viendo
let posicionActual = 0;

// Función reutilizable para actualizar la foto y el texto en el modal
function actualizarModal(nuevoIndice) {
    posicionActual = nuevoIndice;
    modalImg.src = imagenesGaleria[posicionActual].src;
    modalTitulo.textContent = imagenesGaleria[posicionActual].alt;
}

// 2. Abrir el modal en la posición exacta de la foto presionada
imagenesGaleria.forEach((imagen, indice) => {
    imagen.addEventListener('click', () => {
        modal.classList.add('activo');
        actualizarModal(indice);
    });
});

// 3. Avanzar a la siguiente imagen (Carrusel Circular)
btnSiguiente.addEventListener('click', () => {
    let siguienteIndice = posicionActual + 1;
    if (siguienteIndice >= imagenesGaleria.length) {
        siguienteIndice = 0; // Vuelve al inicio
    }
    actualizarModal(siguienteIndice);
});

// 4. Retroceder a la imagen anterior
btnAnterior.addEventListener('click', () => {
    let anteriorIndice = posicionActual - 1;
    if (anteriorIndice < 0) {
        anteriorIndice = imagenesGaleria.length - 1; // Va a la última
    }
    actualizarModal(anteriorIndice);
});

// 5. Cerrar Modal
btnCerrar.addEventListener('click', () => modal.classList.remove('activo'));

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('activo');
});

// 6. Bonus: Control por teclado con flechas izquierda y derecha
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('activo')) return;
    if (e.key === 'ArrowRight') btnSiguiente.click();
    if (e.key === 'ArrowLeft') btnAnterior.click();
    if (e.key === 'Escape') btnCerrar.click();
});

