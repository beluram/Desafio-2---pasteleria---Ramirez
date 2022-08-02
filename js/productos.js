/*const productos = [
    {
      id: 1,
      nombre: 'Lemon Pie',
      valor: 1500,
      imagen: "../assets/img/lemon-pie.jpg",
    },
    {
      id: 2,
      nombre: 'Chocotorta',
      valor: 1400,
      imagen: "../assets/img/chocotorta.jpg"
    },
    {
      id: 3,
      nombre: 'Pastafrola',
      valor: 1200,
      imagen: "../assets/img/pastafrola.jpg"
    },
    {
      id: 4,
      nombre: 'Rogel',
      valor: 1500,
      imagen: "../assets/img/rogel.jpg"
    },
  ];*/
  
  /// localstorage ////
  function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  function guardarProductosLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  /*function buscarProducto(id){
    let producto = obtenerProductosLS();
    return productos.find(x => x.id == id);
  }*/

  fetch("js/productos.json")
    .then((response) => response.json())
    .then((data) => {
        const productos = document.getElementById("productos");
        data.forEach(valor => {
            let columna = document.createElement("div");
            columna.className = "col-md-3";
            let div_padre = document.createElement("div");
            div_padre.className = "card m-2";
            let div_hijo1 = document.createElement("div");
            div_hijo1.className = "card-header";
            let div_hijo2 = document.createElement("div");
            div_hijo2.className = "card-body";
            
            let imagen = document.createElement("img");
            imagen.src = "/img/" + valor.imagen;
            imagen.alt = valor.nombre;
            imagen.className = "imagenProducto"

            
            let divBoton = document.createElement("div");
            divBoton.className = "divbotonAgregar"
            let botonComprar = document.createElement("button");
            botonComprar.className = "botonAgregar";
            botonComprar.textContent = "Agregar al Carrito";
            botonComprar.onclick = function() {
                agregarCarrito(valor.id)
                };


            div_hijo1.innerHTML = `<b>${valor.nombre} </b> <br>$${valor.valor}`;
        
            divBoton.appendChild(botonComprar);
            div_hijo2.appendChild(imagen);
            div_hijo2.appendChild(divBoton);
            div_padre.appendChild(div_hijo1);
            div_padre.appendChild(div_hijo2);
            columna.appendChild(div_padre);
            productos.appendChild(columna);
        });
    })