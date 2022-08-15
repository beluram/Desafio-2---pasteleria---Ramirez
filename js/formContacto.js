const btnFormulario = document.getElementById('button');
const form = document.querySelector('#form');


form.addEventListener('submit', enviarFormulario)

function enviarFormulario(e) {

    e.preventDefault();

    ///btnFormulario.value = 'Enviando...'
    console.log(document.getElementById('nombre_form'))
    let nombre = document.getElementById('nombre_form').value
    let apellido = document.getElementById('apellido_form').value
    let telefono = document.getElementById('telefono_form').value
    let emailContacto = document.getElementById('email_form').value
    let mensajeContacto = document.getElementById('mensaje_form').value

    let params = {
        user_id: '_9x74mzrTJjsBxQWE',
        service_id: 'service_geji25l',
        template_id: 'template_yoq5v6j',
        template_params: {
            'nombre': nombre,
            'apellido': apellido,
            'email': emailContacto,
            'telefono': telefono,
            'mensaje': mensajeContacto
        }
    };

    let headers = {
        'Content-type': 'application/json'
    };

    let options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    };

    Swal.fire({
        icon: 'success',
        iconColor: '#fad8ce',
        title: 'Su consulta ha sido enviada',
        text: 'Estaremos respondiendo pronto!',
        customClass: {
            confirmButton: 'btn_4'
        }
    })
}