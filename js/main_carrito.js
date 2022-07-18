function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<table class="table">`;
  
    for (let producto of productos){
      contenido += ` <tr>
      <td><img src="${producto.imagen}" alt="${producto.nombre}" width="64"></td>
      <td>${producto.nombre}</td>
      <td>${producto.valor}</td>
      <td class="text-end"><a href="#" class="btn btn button"><img src="assets/img/delete.png" width="24"></a> </td>
      </tr>`;
      
    }
  
    contenido += `</table>`;
    document.getElementById("productos_carrito").innerHTML = contenido;
  }

  renderProductosCarrito();