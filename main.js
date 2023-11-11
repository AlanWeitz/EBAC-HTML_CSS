function validarEEnviarFormulario() {
    var valorA = document.getElementById("campoA").value;
    var valorB = document.getElementById("campoB").value;

    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    var mensagemElemento = document.getElementById("mensagemValidacao");

    if (valorB > valorA) {
        exibirMensagem ("Formulário válido! Enviando...", "positiva");
        setTimeout(function() {
            location.reload();
        }, 3000);
    } else {
        exibirMensagem("Formulário inválido! B deve ser maior que A.", "negativa");
    }
    
    setTimeout(function() {
        ocultarMensagem();
    }, 5000);
    return false;
}

function exibirMensagem(mensagem, classe) {
    var mensagemElemento = document.getElementById("mensagemValidacao");
    mensagemElemento.textContent = mensagem;
    mensagemElemento.className = "mensagem-validacao " + classe;
    mensagemElemento.style.display = "block";
}

function ocultarMensagem() {
    var mensagemElemento = document.getElementById("mensagemValidacao");
    mensagemElemento.textContent = "";
    mensagemElemento.style.display = "none";
}
