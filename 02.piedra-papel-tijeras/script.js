let cpu = 0
let jugador = 0
let empate=0


function opcion(numero) {
    let usuario = document.getElementById("piedra" + numero);
    let eleccionCpu = Math.floor(Math.random() * 3) + 1;
    //let selecionado=document.getElementById("seleccion").innerHTML=eleccionCpu;
    console.log("cpu", eleccionCpu)
    console.log("usuario", numero)
    let opciones=["piedra","papel", "tijera"]
    document.getElementById("miJugada").innerHTML=opciones[numero-1];
    document.getElementById("contra").innerHTML=opciones[eleccionCpu-1];
    ganador(eleccionCpu, numero)

    miJugada()
    
}
function ganador(eleccionCpu, usuario) {
    if (
        (eleccionCpu == 1 && usuario == 1) ||
        (eleccionCpu == 2 && usuario == 2) ||
        (eleccionCpu == 3 && usuario == 3)
    ) {
        document.getElementById("resultado").innerHTML = "Empate";

        //document.getElementById("contra").innerText=opcion + numero;
        console.log("Empate");
        empate +=1;
        document.getElementById("empates").innerHTML=empate;


    } if (
        (eleccionCpu == 1 && usuario == 2) ||
        (eleccionCpu == 2 && usuario == 3) ||
        (eleccionCpu == 3 && usuario == 1)) {
        console.log("ganador usuario")
        document.getElementById("resultado").innerHTML = "GANASTE!!";
        jugador +=1;
        limite(jugador)
        document.getElementById("puntajeUsu").innerHTML=jugador;
            rolaRandom()

    } if (
        (eleccionCpu == 2 && usuario == 1) ||
        (eleccionCpu == 1 && usuario == 3) ||
        (eleccionCpu == 3 && usuario == 2)) {
        console.log("ganador cpu")
        document.getElementById("resultado").innerHTML = "Perdiste :((";
        cpu +=1;
        document.getElementById("puntajeCPU").innerHTML=cpu;


    }
}

function reinicio(){
    cpu=0;
    jugador=0;
    empate=0;
document.getElementById("empates").innerHTML=empate;
document.getElementById("puntajeCPU").innerHTML=cpu;
document.getElementById("puntajeUsu").innerHTML=jugador;
document.getElementById("resultado").innerHTML="Comencemos otra vez";
document.getElementById("rola").style.display= "none";


}

function miJugada() {
    //document.getElementById("seleccionado").innerHTML= ;
    console.log("TU JUGADA", miJugada);
}

function rolaRandom(){
    let numeroRola = Math.floor(Math.random() * 3) + 1;
    console.log("rolaRandom"+ numeroRola)
    let rola ="rola"+numeroRola;
    return rola
    


}

function limite(fin){
    limiteJuego= parseInt(fin);
    let rola = rolaRandom()
   if(limiteJuego==5)
    document.getElementById(rola).style.display= "block";
    console.log("limite")
    
    
}
