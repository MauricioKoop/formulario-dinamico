const fieldMaps = {
    0: "Digite seu nome no campo abaixo*",
    1: "Contato WhatsApp*",
    2: {
        0: "Instagram, e Redes Sociais",
        1: "Google",
        2: "Indicação" 
    },
    3: "Qual a sua cidade?*",
    4: "Idade*",
    5: "Altura",
    6: "Peso",
}

let btnPreviousField = document.getElementById('btnPreviousField');
let contadorCampo = 0;

function adicionarCampo() {

    if(contadorCampo <= 6){
        let formularioContainer = document.getElementById('formularioContainer');

        // Cria os elementos do formulario
        let divCampo = document.createElement('div');
        let labelCampo = document.createElement('label');
        let inputCampo = document.createElement('input');

        divCampo.classList.add('campoFormulario');
        labelCampo.textContent = fieldMaps[contadorCampo];
        inputCampo.type = "text";
        inputCampo.name = `Campo${contadorCampo}`;

        // Adiciona os elementos na divCampo
        divCampo.appendChild(labelCampo);
        divCampo.appendChild(inputCampo);
        formularioContainer.appendChild(divCampo);

        contadorCampo++;
    }

}

btnPreviousField.addEventListener('click', function(){
    let nodeList = document.querySelectorAll('.campoFormulario');
    let lastField = nodeList.length -1;
    
    nodeList[lastField].remove();
})