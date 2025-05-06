function abrir_carta(){
    // Ocultar elementos
    document.querySelectorAll(".tapa_abajo, .corazon").forEach(function(elemento) {
        elemento.style.display = "none";
    });


    // Mostrar partes de la carta
    document.querySelector(".sobre").style.display = "block";
    document.querySelector(".tapa_arriba").style.display = "block";
    document.querySelector(".contenido").style.display = "block";

    // Esperar un poquito antes de mover para que se vea la transición
    setTimeout(() => {
        document.querySelector('.contenido').classList.add('mover');
    }, 50); // 50 ms es suficiente
}
