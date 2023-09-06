var lampada = window.document.querySelector('#lamp')

function estaQuebrada() {
    return lampada.src.indexOf('quebrada') > 0
}


function ligar() {
    if (!estaQuebrada()){
        lampada.src = 'img/acesa.svg';
    }
}

function desligar() {
    if (!estaQuebrada()){
    lampada.src = "img/apagada.svg"
    }
}
function quebrada() {
    lampada.src = "img/quebrada.svg"
    lampada.classList.add('quebrada')

}