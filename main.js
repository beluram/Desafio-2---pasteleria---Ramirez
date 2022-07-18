const productos = [
  {
    id: 1,
    nombre: 'Lemon Pie',
    valor: 1500,
    imageURL: 'https://www.annarecetasfaciles.com/files/lemon-pie-scaled.jpg'
  },
  {
    id: 2,
    nombre: 'Chocotorta',
    valor: 1400,
    imageURL: 'https://chocorecetas.com/wp-content/uploads/2020/09/chocotorta-sin-horno-600x450.jpg'
  },
  {
    id: 3,
    nombre: 'Pastafrola',
    valor: 1200,
    imageURL: 'https://cuk-it.com/wp-content/uploads/2020/10/thumb02-8-1024x576.jpg'
  },
  {
    id: 4,
    nombre: 'Rogel',
    valor: 1500,
    imageURL: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/torta-rogel.jpg'
  },
];

/// localstorage ////
function obtenerProductosLS(){
  return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos){
  localStorage.setItem("productos", JSON.stringify(productos));
}

function obtenerProductosCarrito(){
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProductosCarrito(productos){
  localStorage.setItem("carrito", JSON.stringify(productos));
}

function renderProductosHTML(){
  let productos = obtenerProductosLS();
  let contenido = "";

 //// CARRITO Y CARDS CON PRODUCTOS//// 
  for (let producto of productos){
    contenido += `
    <div class="card m-2 text-center" style="width: 18rem;">
      <img src="${producto.imageURL}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
          <h4 class="card-title fw-bold">${producto.nombre}</h4>
          <p class="card-text">Cantidad: ${producto.cantidad}</p>
          <p class="card-text">Precio: $ ${producto.valor}</p>
          <button ref=${producto.id} class="btn btn_purple button" onclick="agregarCarrito(${producto.id})">Comprar</a>
      </div>
    </div>
    `
  }

  document.getElementById("productos").innerHTML = contenido;
}

function renderProductosDOM(){
};

function actualizarBotonCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<button type="button" class="btn btn position-relative">
    <img src="./assets/img/carro.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></button>`;
    let total = 0;

    if (productos.length > 0){
      for (let producto of productos){
        total += producto.cantidad;
      }

      contenido = `<button type="button" class="btn btn position-relative">
    <img src="./assets/img/carro.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${total}</span></button>`;
    }

    document.getElementById("boton_carrito").innerHTML = contenido;
}

function buscarProducto(id){
  let producto = obtenerProductosLS();
  return productos.find(x => x.id == id);
}

function agregarCarrito(id){
  let producto = buscarProducto(id);
  let productos_carrito = obtenerProductosCarrito();
  producto.cantidad = 1;
  productos_carrito.push(producto);
  guardarProductosCarrito(productos_carrito);
  actualizarBotonCarrito();
}

guardarProductosLS(productos);
actualizarBotonCarrito();
renderProductosHTML();