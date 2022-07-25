
function renderProductosHTML(){
  let productos = obtenerProductosLS();
  let contenido = "";

 //// CARDS CON PRODUCTOS//// 
  for (let producto of productos){
    contenido += `
    <div class="card m-2 text-center" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
          <h4 class="card-title fw-bold">${producto.nombre}</h4>
          <p class="card-text">Cantidad: ${producto.cantidad}</p>
          <p class="card-text">Precio: $ ${producto.valor}</p>
          <button ref=${producto.id} class="btn btn_purple button" title="Agregar al Carrito" onclick="agregarCarrito(${producto.id})">Comprar</a>
      </div>
    </div>
    `
  }

  document.getElementById("productos").innerHTML = contenido;
}


function renderProductosDOM(){
};

guardarProductosLS(productos);
actualizarBotonCarrito();
renderProductosHTML();

//buscador en la navbar

/*const buscador = (array, texto) =>{
  return array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()))
}
const form = document.getElementById('form');
const input = document.getElementById ('searchInput');

const buscar = (e) => {
  e.preventDefault();

  renderProductosDOM (buscador(productos, input.value), productos);
}

input.addEventListener('input', buscar) */


