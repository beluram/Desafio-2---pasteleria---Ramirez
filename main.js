function saludar (){
  alert(
    "Bienvenido/a a Amatista " + nombre + " a continuación podrás elegir productos de nuestra tienda"
  );
}

function comprarProducto (){
  producto = prompt ( 
    "Elija el producto que desea comprar \n 1: Cheesecake \n 2: Lemon Pie \n 3: Chocotorta"
    );

    if (producto ==="1") {
      alert ("Elegiste la torta Cheesecake");
    } else if (producto === "2"){
      alert ("Elegiste la torta Lemon Pie");
    } else if (producto ==="3"){
      alert ("Elegiste la torta Chocotorta");
    }

    opcion = prompt (
      "Vuelva a ingresar una opcion \n 1: seguir comprando \n 2: finalizar"
      );
}

function finalizarCompra () {
  if (producto === "1") {
    alert ( 
      "Usted eligio la torta Cheesecake por un monto final de " + cheesecake
      );
  } else if (producto === "2"){
    alert (
      "Usted eligio la torta Lemon Pie por un monto final de" + lemonPie
    );
  } else if (producto === "3"){
    alert (
      "Usted eligio la torta Chocotorta por un monto final de " + chocotorta
    );
  }
}

let producto;
let cheesecake = 1500;
let lemonPie = 1600;
let chocotorta = 1300;
let nombre = prompt ("Ingrese su nombre");

saludar ();
let opcion = prompt (
  "Ingrese una opción: \n 1: comprar torta \n 2: finalizar compra \n 3: terminar"
);

while (opcion !== "3"){
  if (opcion === "1"){
    comprarProducto ();
  }
  if (opcion === "2"){
    finalizarCompra ();
    opcion = "3";
  }
}

alert ("Gracias por su compra");