let btnIniciar = document.getElementById('btnIniciar');
let btnVoltar = document.getElementById('btnVoltar');
let boxBtn = document.getElementById('boxBtn');
let btnCompleteForm = document.getElementById('btnCompleteForm');
let fieldContainer = document.querySelectorAll('.field-container');
let header = document.getElementById('header');
let formularioContainer = document.getElementById('formularioContainer');
let progressBarWidth = document.querySelector('.progress__bar-width');
let progressBarValue = document.querySelector('.progress__bar-value');
let count = -1;

function showFieldsForm(acionador){
    // Se houver click no botão avançar
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

        showPercentageBar(count);
    }

    // Se houver click no botão voltar
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
        showPercentageBar(count);
    }

    // Esconde o header se o formulário estiver sido iniciado, e altera o texto do botão começar
    if (count >= 0) {
        header.classList.add('hide');
        btnIniciar.textContent = "Avançar";

    }else{
        header.classList.remove('hide');
        btnIniciar.textContent = "Começar";
    }

    // Esconde o botão voltar se não possuir campos antescessores
    count == 0 ? btnVoltar.classList.add('hide') : btnVoltar.classList.remove('hide');

    // Função formulário completo
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

function showPercentageBar(count){
    totalValue = 7;
    percentage = (count / totalValue) * 100;
    percentage = Number.parseInt(percentage.toFixed());
    
    progressBarValue.textContent = percentage + "%";
    progressBarWidth.style.width = `${percentage}%`;
}