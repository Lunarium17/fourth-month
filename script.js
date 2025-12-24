// Función para abrir el modal
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    
    modal.style.display = "block";
    modalImg.src = element.src; // Usa la misma fuente de la imagen clicada
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Cerrar si se hace click fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}