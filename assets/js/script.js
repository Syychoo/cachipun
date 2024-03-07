

const optionEmoji = (option) => {
    let emoji = ''
    switch (option) {
        case 1:
            emoji = '🗿'
            break;
        case 2:
            emoji = '📜'
            break;
        case 3:
            emoji = '✂️'
            break;
    }
    return emoji;
}

const scoreEmoji = (score) => {
    let emoji = ''
    switch (score) {
        case -1:
            emoji = '👎🏼'
            break;
        case 0:
            emoji = '✊🏼'
            break;
        case 1:
            emoji = '👍🏼'
            break;
    }
    return emoji;
}

const obtenerNumerico = (msg, minimo, maximo) => {
    let opcion = NaN
    while (isNaN(opcion) || opcion < minimo || opcion > maximo) {
        opcion = parseInt(prompt(msg))
        if (isNaN(opcion) || opcion < minimo || opcion > maximo) {
            alert(`El dato ingresado no es valido, favor de ingresar un dato numerico entre ${minimo} y ${maximo}`)
        }
    }
    return opcion;
}

const botPlay = () => {
    return Math.floor(Math.random() * 3) + 1;
}

const processRound = (playerChoice, botChoice) => {
    let roundResult = 0 // -1 = Derrota, 0 = Empate, 1 = Victoria
    if ((playerChoice == 3 && botChoice == 2) ||
        (playerChoice == 2 && botChoice == 1) ||
        (playerChoice == 1 && botChoice == 3)
    ) {
        roundResult = 1
    } else if (playerChoice == botChoice) {
        roundResult = 0
    } else {
        roundResult = -1
    }
    return [roundResult, playerChoice, botChoice];
}

const roundScore = (scoreData) => {
    switch (scoreData[0]) {
        case -1:
            alert(`Jugador-> ${optionEmoji(scoreData[1])}⚔️${optionEmoji(scoreData[2])} <-CPU \nOh no perdiste ${scoreEmoji(scoreData[0])}`)
            break;
        case 0:
            alert(`Jugador-> ${optionEmoji(scoreData[1])}⚔️${optionEmoji(scoreData[2])} <-CPU \nWoW un empate ${scoreEmoji(scoreData[0])}`)
            break;
        case 1:
            alert(`Jugador-> ${optionEmoji(scoreData[1])}⚔️${optionEmoji(scoreData[2])} <-CPU \n¡Felicidades, ganaste! ${scoreEmoji(scoreData[0])}`)
            break;
        default:
    }
}

const gameLoop = () => {
    let salir = false
    while (!salir) {
        let numeroRondas = obtenerNumerico('¿Cuantas rondas deseas jugar?', 1, 20)
        for (let ronda = 0; ronda < numeroRondas; ronda++) {
            let opcion = obtenerNumerico('Ingrese una opcion:\n 1.- Piedra \n 2.- Papel \n 3.- Tijera', 1, 3)
            let cpuOption = botPlay()
            let roundData = processRound(opcion, cpuOption)
            roundScore(roundData)
        }

        salir = !confirm('¿Quieres jugar otra ronda?')
    }
}


document.addEventListener('DOMContentLoaded', () => {
    gameLoop()

})

