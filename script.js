document.addEventListener('DOMContentLoaded', function() {
    const buscadorInput = document.getElementById('buscador');
    const listaElementos = document.getElementById('lista-elementos');
    const itemsLista = listaElementos.querySelectorAll('li'); // AQUÍ estaba el problema

    buscadorInput.addEventListener('input', function() {
        const textoBusqueda = buscadorInput.value.toLowerCase();

        itemsLista.forEach(item => {
            const textoItem = item.textContent.toLowerCase();
            if (textoItem.includes(textoBusqueda)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    window.buscar = function() {
        const textoBusqueda = buscadorInput.value.toLowerCase();

        itemsLista.forEach(item => {
            const textoItem = item.textContent.toLowerCase();
            if (textoItem.includes(textoBusqueda)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    };
});
