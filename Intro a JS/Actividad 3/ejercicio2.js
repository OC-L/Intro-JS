var jugador1 = prompt("Jugador 1 elige 'Piedra, Papel o Tijera': ");
var jugador2 = prompt("Jugador 2 elige 'Piedra, Papel o Tijera': ");

if (jugador1 == "Piedra"){
    switch(jugador2){
        case "Piedra":
            console.log("Empate.");
        break;

        case "Papel":
            console.log("El jugador 2 gana.");
        break;

        case "Tijera":
            console.log("El jugador 1 gana.");
    }
}

if (jugador1 == "Papel"){
    switch(jugador2){
        case "Papel":
            console.log("Empate.");
        break;

        case "Tijera":
            console.log("El jugador 2 gana.");
        break;

        case "Piedra":
            console.log("El jugador 1 gana.");
    }
}

if (jugador1 == "Tijera"){
    switch(jugador2){
        case "Tijera":
            console.log("Empate.");
        break;

        case "Piedra":
            console.log("El jugador 2 gana.");
        break;

        case "Papel":
            console.log("El jugador 1 gana.");
    }
}