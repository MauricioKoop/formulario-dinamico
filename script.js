let btnIniciar = document.getElementById('btnIniciar');
let btnVoltar = document.getElementById('btnVoltar');
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

        console.log(count);
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
        console.log(count);
    }
}