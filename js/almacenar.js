<<<<<<< Updated upstream
const inputItem = document.getElementById('item');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

function cargarListado() {
    const itemsGuardados = JSON.parse(localStorage.getItem('listadoItems')) || [];
    contenedor.innerHTML = '';
    for (let i = 0; i < itemsGuardados.length; i++) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = itemsGuardados[i];
      contenedor.appendChild(li);
    }
}

function agregarItem() {
  const nuevoItem = inputItem.value.trim();
  if (nuevoItem) {
    const itemsGuardados = JSON.parse(localStorage.getItem('listadoItems')) || [];
    itemsGuardados.push(nuevoItem);
    localStorage.setItem('listadoItems', JSON.stringify(itemsGuardados));
    inputItem.value = ''; 
    cargarListado(); 
  }
}

function limpiarListado() {
  localStorage.removeItem('listadoItems');
  cargarListado();
}

btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', limpiarListado);

window.addEventListener('load', cargarListado);
=======
// Función para actualizar la vista del listado
function actualizarVista() {
    let lista = JSON.parse(localStorage.getItem('lista')) || [];
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = ''; // Limpiar contenido previo
    lista.forEach(item => {
        let li = document.createElement('li');
        li.className = 'list-group-item'; // Clase de Bootstrap para estilo
        li.textContent = item;
        contenedor.appendChild(li);
    });
}

// Función para agregar un ítem a la lista
document.getElementById('agregar').addEventListener('click', function() {
    const nuevoItem = document.getElementById('item').value.trim();
    if (nuevoItem) {
        let lista = JSON.parse(localStorage.getItem('lista')) || [];
        lista.push(nuevoItem);
        localStorage.setItem('lista', JSON.stringify(lista));
        actualizarVista(); // Actualizar la lista visible
        document.getElementById('item').value = ''; // Limpiar el campo de texto
    }
});

// Función para limpiar el listado almacenado
document.getElementById('limpiar').addEventListener('click', function() {
    localStorage.removeItem('lista');
    actualizarVista(); // Limpiar la lista visible
});

// Al cargar la página, actualizar la vista con los ítems guardados
window.onload = actualizarVista;
>>>>>>> Stashed changes
