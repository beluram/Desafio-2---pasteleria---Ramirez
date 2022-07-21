function guardarUsuario() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let cliente = document.getElementById("cliente");
    
    const usuario = {
        nombre:nombre.value,
        email:email.value,
        cliente:cliente.value
    }

    usuario.cliente == "SI" ? registrarUsuario() : informarError();

    function registrarUsuario() {
        const usuario_cliente = {
            ...usuario,
            numero_cliente: Math.round(Math.random() * 10000)
        }

        informarRegistracion(usuario_cliente);
    }

    function informarRegistracion(usuario) {
        let salida = `Nombre: ${usuario.nombre}<br>
        Email: ${usuario.email}<br>
        Cliente: ${usuario.cliente}<br>
        Número de Cliente: #${usuario.numero_cliente}`;
        document.getElementById("resultado").innerHTML = `<p class="alert alert-success" role="alert">${salida}</p>`;
        limpiarCampos();
    }

    function informarError() {
        document.getElementById("resultado").innerHTML = `<p class="alert alert-danger" role="alert">No es posible registar el Usuario, por no posee numero de cliente</p>`;
    }

    function limpiarCampos() {
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cliente").value = "";
    }
}

document.getElementById("enviarForm").addEventListener("click", guardarUsuario);