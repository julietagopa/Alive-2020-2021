let turnoPrimerJugador = true

function marcarCasilla() {
  let casilla = document.getElementById('casilla1');
  casilla.classList.add("morada");

  if (turnoPrimerJugador) {
        casilla.childNodes[0].innerText ="X";
        turnoPrimerJugador = false
      }
    else {
    casilla.childNodes[0].innerText="O";
    turnoPrimerJugador = true
    }
}
