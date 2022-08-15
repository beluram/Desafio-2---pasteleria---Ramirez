function obtenerProductosCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos) {
  localStorage.setItem("carrito", JSON.stringify(productos));
}


function actualizarBotonCarrito() {
  let productos = obtenerProductosCarrito();
  let contenido = `<button type="button" class="btn btn position-relative">
    <img src="./assets/img/carro.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></button>`;
  let total = 0;

  if (productos.length > 0) {
    for (let producto of productos) {
      total += producto.cantidad;
    }

    contenido = `<button type="button" class="btn btn position-relative">
    <img src="./assets/img/carro.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span></button>`;
  }

  document.getElementById("boton_carrito").innerHTML = contenido;
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarBotonCarrito();
  renderProductosCarrito();
}

function agregarCarritoHome(producto) {
  let productos_carrito = agregarItem(producto);
  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito();
}

function agregarItem(producto) {
  let productos_carrito = obtenerProductosCarrito();
  let pos = productos_carrito.findIndex(x => x.id == producto.id)

  if (pos > -1) {
    productos_carrito[pos].cantidad += 1;
  } else {
    producto.cantidad = 1;
    productos_carrito.push(producto);
  }

  return productos_carrito;
}

function eliminarItem(id) {
  let productos_carrito = obtenerProductosCarrito();
  let pos = productos_carrito.findIndex(x => x.id == id)
  productos_carrito.splice(pos, 1);
  
  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito();
  renderProductosCarrito();
}

function disminuirCantidadItem(id) {
  let productos_carrito = obtenerProductosCarrito();
  let pos = productos_carrito.findIndex(x => x.id == id)
  productos_carrito[pos].cantidad -= 1;

  productos_carrito[pos].cantidad == 0 && productos_carrito.splice(pos, 1);
  
  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito();
  renderProductosCarrito();
}

function incrementarCantidadItem(id){
  let productos_carrito = obtenerProductosCarrito();
  let pos = productos_carrito.findIndex(x => x.id == id);
  productos_carrito[pos].cantidad += 1;

  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito();
  renderProductosCarrito();
}
