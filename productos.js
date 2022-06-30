const productos = [ 
    {id:1, nombre: "Lemon Pie", precio: 1500},
    {id:2, nombre: "Rogel", precio: 1600},
    {id:3, nombre: "Pastafrola", precio: 1200},
    {id:4, nombre: "Chocotorta", precio: 1300},
] 

const productos_seleccionados = [];

class Producto {
    constructor (objeto){
        this.id = objeto.id;
        this.nombre = objeto.nombre;
        this.precio = parseFloat (objeto.precio);
        this.descuento = 15;
        this.iva = 21;
        this.vendido = false;
    }

    aplicarDescuento (){
        this.precio = this.precio - ((this.precio * this.descuento) / 100);
    }

    aplicarIVA (){
        this.precio = this.precio + ((this.precio * this.precio) / 100);
    }

    venderProducto () {
        this.vendido = true;
    }

    fueVendido (){
        return this.vendido;
    }
}

function buscarProducto (id){
    for (let producto of productos){
        if (producto.id == id){
            return producto;
        }
    }
    return 0;
}

function eliminarProducto (id){
    for (let producto  of productos){
        if (producto.id == id){
            let produ = productos.indexOf (producto);
            productos.slice (produ, 1);
        }
    }
}