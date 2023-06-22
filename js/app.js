const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function(event) {
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');

    // Construir la Imagen
    const imagen = document.createElement('IMG');
    imagen.src = 'img/${rutaImagen}.jpg';
    
    imagen.classList.add('img-fluid');
    imagen.alt ='Imagen productos';


    const contenidoModal = document.querySelecctor('.modal-body');
    contenidoModal.appenChild(imagen);
})

modalImagen.addEventListener('hidden.bs.modal', function(){
    const contenidoModal = document.querySelecctor('.modal-body');
    contenidoModal.textConttent ='';
});
