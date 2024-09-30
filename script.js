let btnIniciar = document.getElementById('btnIniciar');
let btnVoltar = document.getElementById('btnVoltar');
let btnCompleteForm = document.getElementById('btnCompleteForm');
let fieldContainer = document.querySelectorAll('.field-container');
let header = document.getElementById('header');
let count = -1;

function showFieldsForm(acionador){
    if(acionador === 1){
        count++;

        // faz o loop e exibe o próximo campo e esconde os demais
        for (let i = 0; i < fieldContainer.length; i++) {
            if(count === i){
                fieldContainer[i].classList.remove('hide');
            }else{
                fieldContainer[i].classList.add('hide');
            }
        }
    }

    if(acionador === 2){
        count--;

        // Faz o loop, exibe o campo anterior e esconde os demais
        for (let i = 0; i < fieldContainer.length; i++) {
            if(count === i){
                fieldContainer[i].classList.remove('hide');
            }else{
                fieldContainer[i].classList.add('hide');
            }
        }

        // Impede números negativos
        count < 0 ? count = 0 : count;
    }

    // Esconde o botão voltar se não possuir campo anteroior ao atual
    count >= 1 ? btnVoltar.classList.remove('hide') : btnVoltar.classList.add('hide');

    // Esconde o header se o formulário estiver sido iniciado, e altera o texto do botão começar
    if (count >= 0) {
        header.classList.add('hide');
        btnIniciar.textContent = "Avançar";

    }else{
        header.classList.remove('hide');
        btnIniciar.textContent = "Começar";
    }


    // Se chegar no último campo executa função formulário completo
    completeForm(count);
}

function completeForm(count) {
    if (count >= 7) {
        btnIniciar.classList.add('hide');
        btnCompleteForm.classList.remove('hide');
    }else{
        btnIniciar.classList.remove('hide');
        btnCompleteForm.classList.add('hide');
    }
}