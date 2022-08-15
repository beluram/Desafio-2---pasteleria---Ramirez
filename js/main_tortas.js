/// localstorage ////
function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}


let contenido = "";

fetch("js/productos.json")
    .then((response) => response.json())
    .then((data) => {
        const productos = document.getElementById("productos");
        data.forEach(prod => {
            if (prod.categoria == 1){
                let columna = document.createElement("div");
            columna.className = "col-md-3";
            let div_padre = document.createElement("div");
            div_padre.className = "card m-2";
            let div_hijo1 = document.createElement("div");
            div_hijo1.className = "card-header card_purple";
            let div_hijo2 = document.createElement("div");
            div_hijo2.className = "card-body";

            let imagen = document.createElement("img");
            imagen.src = "/img/" + prod.imagen;
            imagen.alt = prod.nombre;
            imagen.className = "imagenProducto"


            let divBoton = document.createElement("div");
            divBoton.className = "divbotonAgregar"
            let botonComprar = document.createElement("button");
            botonComprar.className = "botonAgregar";
            botonComprar.textContent = "Agregar al Carrito";
            botonComprar.onclick = function () {
                agregarCarrito(prod)
            };


            div_hijo1.innerHTML = `<b>${prod.nombre} </b> <br>$${prod.valor}`;

            divBoton.appendChild(botonComprar);
            div_hijo2.appendChild(imagen);
            div_hijo2.appendChild(divBoton);
            div_padre.appendChild(div_hijo1);
            div_padre.appendChild(div_hijo2);
            columna.appendChild(div_padre);
            productos.appendChild(columna);
            }
            

        });
    })