let nombre_producto = "";
let precio_producto = "";
let seleccion = "";

while (seleccion.toUpperCase() != "ESC"){
  let salida = "Seleccione el número de producto a agregar al carrito: \n\n";

  for (let producto of productos){
    let producto_lista = new Producto (producto);
    salida += "ID: " + producto.id + " - Nombre: " + producto_lista.nombre + " - Precio: $" + producto_lista.precio +  "\n";  
  }

  let seleccion = prompt (salida);

  if ((seleccion === null) || (seleccion.toUpperCase() === "ESC")){
    break;
  }

  let producto_encontrado = buscarProducto (seleccion);

  if (producto_encontrado !=0){
    let producto_lista = new Producto (producto_encontrado);
    producto_lista.venderProducto ();
    productos_seleccionados.push(producto_lista);
    eliminarProducto (producto_encontrado.id);
    console.log ("Agregaste al Carrito:" + producto_lista.nombre + " ($" + producto_lista.precio + ")");  
  }
}

console.log (productos_seleccionados);

let total_pagar= 0;

for (let producto of productos_seleccionados) {
  console.log ("Producto: " + producto.nombre);
  console.log ("Precio original: $" + producto.precio);
  producto.aplicarIVA();
  console.log ("Precio con IVA: $" + producto.precio);

  if (productos_seleccionados.length > 2) {
    producto.aplicarDescuento () ;
    console.log ("Precio con Descuento: $" + producto.precio);
  }

  total_pagar += producto.precio;
}

alert ("El Total a Pagar es: $" + total_pagar);