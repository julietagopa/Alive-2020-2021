let turnoPrimerJugador = true

function marcarCasilla(numero) {
  let casilla = document.getElementById('casilla'+ numero);

let  ocupada = estaOcupada(casilla)
if(!ocupada){
  if (turnoPrimerJugador) {
      casilla.classList.add("morada");
      casilla.classList.remove("verde")
      casilla.childNodes[0].innerText ="X";
      turnoPrimerJugador = false
      }
          else {
      casilla.classList.add("verde");
      casilla.classList.remove("morada")
    casilla.childNodes[0].innerText="O";
        turnoPrimerJugador = true
    }
}
}



function estaOcupada(casilla) {
if (casilla.childNodes[0].innerText) {
  console.log("si esta ocupada")
return true;
} else {
  console.log("no esta ocupada")
  return false;


}
}



function reiniciarJuego() {
limpiarCasilla(1);
limpiarCasilla(2);
limpiarCasilla(3);
limpiarCasilla(4);
limpiarCasilla(5);
limpiarCasilla(6);
limpiarCasilla(7);
limpiarCasilla(8);
limpiarCasilla(9);
}
function limpiar(numero) {
let casilla = document.getElementById("casilla"+ numero);
//vaciar casilla o texto vacio
casilla.childNodes[0].innerText="";
//quitamos estilos
casilla.classList.remove("morada");
casilla.classList.remove("verde");

}
