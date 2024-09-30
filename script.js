let btnIniciar = document.getElementById('btnIniciar');
let btnVoltar = document.getElementById('btnVoltar');
let boxBtn = document.getElementById('boxBtn');
let btnCompleteForm = document.getElementById('btnCompleteForm');
let fieldContainer = document.querySelectorAll('.field-container');
let header = document.getElementById('header');
let formularioContainer = document.getElementById('formularioContainer');
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
        console.log(count);
    }

    if(acionador === 2){
        count--;

        // Impede números negativos
        count < 0 ? count = 0 : count;

        // Faz o loop, exibe o campo anterior e esconde os demais
        for (let i = 0; i < fieldContainer.length; i++) {
            if(count === i){
                fieldContainer[i].classList.remove('hide');
            }else{
                fieldContainer[i].classList.add('hide');
            }
        }

        console.log(count);
    }

    // Esconde o botão voltar se não possuir campo anteroior ao atual
    count >= 0 ? btnVoltar.classList.remove('hide') : btnVoltar.classList.add('hide');

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
        boxBtn.classList.add('centered');
        formularioContainer.classList.add('centered');
    }else{
        btnIniciar.classList.remove('hide');
        btnCompleteForm.classList.add('hide');
        formularioContainer.classList.remove('centered');
        boxBtn.classList.remove('centered');
    }
}