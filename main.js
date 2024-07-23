
const form = document.getElementById('formu');

function campo(campoMenor) {
    const numero = campoMenor.split(' ');
    return campoMa > campoMe
}

form.addEventListener('submit' , function(e) {
    let formEValido = false;
    e.preventDefault();

    const campoMa = document.getElementById('campo_maior');
    const campoMe = document.getElementById('campo_menor');
    const mensagemSucesso = `Esta Correto: ${campoMe} e menor que: ${campoMa}`;

    formEValido = campo(campoMa.value)
    if (formEValido) {
        alert(mensagemSucesso);

        campoMa.value = '';
        campoMe.value = '';
    } else {
        alert("Desculpe, o Numero esta Incorreto");
    }
})



console.log(form);


