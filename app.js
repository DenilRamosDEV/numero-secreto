let intentos;
let numeroSecreto;
let listNums = [];
let cantJuegos = 10;
valoresIniciales();
function intentoUsuaio() {
    intentos--;
    let numeroDelUsuario = parseInt(document.getElementById('numeroUsuarios').value);
    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste`);
        document.getElementById('numeroUsuarios').setAttribute('readonly', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDelUsuario > numeroSecreto) {
        limpiarInput();
        asignarTextoElemento('p', `El numero es menor | Te quedan ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        limpiarInput();
        asignarTextoElemento('p', `El numero es mayor | Te quedan ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    }
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function generarNumeroSecreto() {
    let numAleat = Math.floor(Math.random() * 10) + 1;
    console.log(numAleat);
    console.log(listNums);
    if (cantJuegos == listNums.length) {
        asignarTextoElemento('p', 'Felicidades, terminate el juego');
    } else {
        if (listNums.includes(numAleat)) {
            return generarNumeroSecreto();
        } else {
            listNums.push(numAleat);
            return numAleat;
        }
    }
}
function limpiarInput() {
    document.getElementById('numeroUsuarios').value = '';
}
function valoresIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    intentos = 5;
    numeroSecreto = generarNumeroSecreto();
    limpiarInput();
}
function reIniciarJuego() {
    valoresIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('numeroUsuarios').removeAttribute('readonly');
}