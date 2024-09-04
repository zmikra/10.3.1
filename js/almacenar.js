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

