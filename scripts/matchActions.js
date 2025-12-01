const IMAGENES_POSIBLES = [
    "./imgs/img1.png",
    "./imgs/img2.jpg",
    "./imgs/img3.png",
    "./imgs/img4.png",
    "./imgs/img5.png",
    "./imgs/img6.png",
    "./imgs/img7.jpg",
    "./imgs/img8.jpg",
    "./imgs/img9.png",
    "./imgs/img10.jpg",
    "./imgs/img11.jpg",
    "./imgs/img12.jpg",
    "./imgs/img13.jpg",
    "./imgs/img14.jpg",
    "./imgs/img15.jpg",
    "./imgs/img16.png",
    "./imgs/img17.jpg",
    "./imgs/img18.jpg"
];

window.onload = function() {
    cambiarImagenAleatoria();
}

// Función que cambia la imagen del match de manera aleatoria (nomás para practicar jaja)
function cambiarImagenAleatoria() {
    const imagenMatch = document.getElementById("image");

    /* 
        Generar un índice aleatorio con Math.random
        luego ese número se multiplica por la longitud del arreglo
        de imágenes y por último lo redondeo hacia abajo con floor
        para ver que imagen tocó
    */
    const indiceAleatorio = Math.floor(Math.random() * IMAGENES_POSIBLES.length);

    // Asignar la ruta de la imagen aleatoria que tocó 
    imagenMatch.src = IMAGENES_POSIBLES[indiceAleatorio];
}