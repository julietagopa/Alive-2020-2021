let turnoPrimerJugador = true
let copiaTablero=[]

function marcarCasilla(numero) {
  let casilla = document.getElementById('casilla'+ numero);

let  ocupada = estaOcupada(casilla)
if(!ocupada){
  if (turnoPrimerJugador) {
      casilla.classList.add("morada");
      casilla.classList.remove("verde")
      casilla.childNodes[0].innerText ="X";
      copiaTablero[numero-1]='x'
      turnoPrimerJugador = false
      }
          else {
      casilla.classList.add("verde");
      casilla.classList.remove("morada")
    casilla.childNodes[0].innerText="O";
      copiaTablero[numero-1]='o'
        turnoPrimerJugador = true
    }
  if ( revisarGanador()){
    console.log("YA HAY UN GANADOR")
    //BLOQUEAR TABLERO
    //MOSTRAR LETRERO DE FLCDS
     }
   }

}

function revisarGanador() {
  //revisar todas las posibles opciones de ganar la partida dependiendo de la posisicion de mis arreglos

if (
( copiaTablero[0] && copiaTablero[0] == copiaTablero[3] && copiaTablero[0] == copiaTablero[6]) ||
(copiaTablero[1] && copiaTablero[1] == copiaTablero[4] && copiaTablero[1] == copiaTablero[7])||
(copiaTablero[2] && copiaTablero[5] == copiaTablero[2] && copiaTablero[2] == copiaTablero[8])
) {
  return true;

}
//horizontales
if (
( copiaTablero[0] && copiaTablero[0] == copiaTablero[1] && copiaTablero[0] == copiaTablero[2]) ||
(copiaTablero[3] && copiaTablero[3] == copiaTablero[4] && copiaTablero[3] == copiaTablero[5])||
(copiaTablero[6] && copiaTablero[6] == copiaTablero[7] && copiaTablero[6] == copiaTablero[8])
) {
  return true;

}
if (
( copiaTablero[0] && copiaTablero[0] == copiaTablero[4] && copiaTablero[0] == copiaTablero[8]) ||
(copiaTablero[2] && copiaTablero[2] == copiaTablero[4] && copiaTablero[2] == copiaTablero[6])
) {

return true;
}
 return false;
}


function estaOcupada(casilla) {
if (casilla.childNodes[0].innerText) {

return true;
} else {

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

copiaTablero=[];
}
function limpiar(numero) {
let casilla = document.getElementById("casilla"+ numero);
//vaciar casilla o texto vacio
casilla.childNodes[0].innerText="";
//quitamos estilos
casilla.classList.remove("morada");
casilla.classList.remove("verde");
}
