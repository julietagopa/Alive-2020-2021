let turnoPrimerJugador = true
let copiaTablero=[]
let juegoActivo=true;
let mensajeGanador=true;
let jugadores =2;

function marcarCasilla(numero) {
  let casilla = document.getElementById('casilla'+ numero);

let  ocupada = estaOcupada(casilla);
if(juegoActivo){
      if(!ocupada){
        if (turnoPrimerJugador) {
            casilla.classList.add("morada");
            casilla.classList.remove("verde");
            casilla.childNodes[0].innerText ="X";
            copiaTablero[numero-1]='x';
            turnoPrimerJugador = false;
           document.getElementById("jugadorEnTurno").innerText=2;
            }
                else {
            casilla.classList.add("verde");
            casilla.classList.remove("morada")
          casilla.childNodes[0].innerText="O";
            copiaTablero[numero-1]='o';
              turnoPrimerJugador = true;
             document.getElementById("jugadorEnTurno").innerText=1;

          }
        if ( revisarGanador()){
          console.log("YA HAY UN GANADOR")
          juegoActivo=false;
          document.getElementById("mensajeGanador").style.display="inline-block";
        } else {

          if(jugadores===1){
            //estamos juando contra CPU
            if (!turnoPrimerJugador){
              turnoCPU
            }
          }
        }

          }
                      //BLOQUEAR TABLERO
          //MOSTRAR LETRERO DE FLCDS
           }
        }

  function turnoCPU() {

    let numAleatorio=Math.floor(Math.random()*10)
    let seleccionCPU=document.getElementById("casilla"+ numAleatorio)

    estaOcupada(seleccionCPU)
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

copiaTablero= [];
juegoActivo= true;
turnoPrimerJugador=true;
document.getElementById('mensajeGanador').style.display="none"
document.getElementById("jugadorEnTurno").innerText=1

}
function limpiarCasilla(numero) {
let casilla = document.getElementById("casilla"+ numero);
//vaciar casilla o texto vacio
casilla.childNodes[0].innerText="";
//quitamos estilos
casilla.classList.remove("morada");
casilla.classList.remove("verde");

}
function modoJuego() {

  if (jugadores===2){
    document.getElementById("juegoTipo").innerText="Vs jugador";
  jugadores=1;
}
  else {
          document.getElementById("juegoTipo").innerText="VS cpu";
          jugadores=2;
            }
            reiniciarJuego();
}
