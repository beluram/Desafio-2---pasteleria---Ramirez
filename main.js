const productos = [
  {
    id: 1,
    nombre: 'Lemon Pie',
    valor: 1500,
    cantidad: 5,
    imageURL: 'https://www.annarecetasfaciles.com/files/lemon-pie-scaled.jpg'
  },
  {
    id: 2,
    nombre: 'Chocotorta',
    valor: 1400,
    cantidad: 5,
    imageURL: 'https://chocorecetas.com/wp-content/uploads/2020/09/chocotorta-sin-horno-600x450.jpg'
  },
  {
    id: 3,
    nombre: 'Pastafrola',
    valor: 1200,
    cantidad: 5,
    imageURL: 'https://cuk-it.com/wp-content/uploads/2020/10/thumb02-8-1024x576.jpg'
  },
  {
    id: 4,
    nombre: 'Rogel',
    valor: 1500,
    cantidad: 5,
    imageURL: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/torta-rogel.jpg'
  },
];

const carrito = []

const contenedor = document.getElementById ('contenedor');
const contenedorCarrito = document.getElementById ('carrito');

const renderProducts = (products, target) => {
  let acumulador = '';

  products.map(product => {
    acumulador += `
    <div class="card m-2 text-center" style="width: 18rem;">
      <img src="${product.imageURL}" class="card-img-top" alt="${product.nombre}">
      <div class="card-body">
          <h4 class="card-title fw-bold">${product.nombre}</h4>
          <p class="card-text">Cantidad: ${product.cantidad}</p>
          <p class="card-text">Precio: $ ${product.valor}</p>
          <button ref=${product.id} class="btn btn-outline-secondary button">Comprar</a>
      </div>
    </div>
    `
  })

  target.innerHTML = acumulador;

  const buttons = document.querySelectorAll ('.button');
  buttons.forEach(button => button.addEventListener('click', handleClick))
}

const handleClick = (event) =>{
  const id = parseInt(event.target.getAttribute('ref'));
  const product = productos.find(producto => producto.id === id);
  alert ('Compraste ' + product.nombre + 'por $' + product.valor);  

  if (carrito.some(el =>el.id === product.id)){
    const posicion = carrito.findIndex(el => el.id === product.id)
    carrito [posicion].cantidad = carrito [posicion].cantidad + 1;
  } else{
    carrito.push({
      id: product.id,
      nombre: product.nombre,
      valor: product.valor,
      cantidad: 1,
      imageURL: product.imageURL,
    })
  }
  
  renderProducts(carrito, contenedorCarrito);

}

const buscador = (array, texto) =>{
  return array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()))
}

const form = document.getElementById('form');
const input = document.getElementById('searchInput');

const buscar = (e) =>{
  e.preventDefault ();
  renderProducts(buscador(productos,input.value), contenedor)
}

input.addEventListener('input', buscar);
renderProducts (productos, contenedor);