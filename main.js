const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    let campoA = parseFloat(document.getElementById('menor-a').value);
    let campoB = parseFloat(document.getElementById('maior-b').value);

    const messagesucess = 'Formulario enviado com sucesso! Verificando: <b> Campo A menor que Campo B!</B>';
    const containermessagesucess = document.querySelector('.success-message');

    formValid = numbervalid(campoA, campoB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    } else {
        alert("O Campo A e maior que o Campo B")
    }    
})


