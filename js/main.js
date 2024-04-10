// let hora = "14"

// if(hora <= 4 && hora >= 0) {
//     console.log('Boa madrugada!');
// } else if (hora >= 5 && hora < 12) {
//     console.log('Bom dia!');
// } else if (hora >= 12 && hora <= 18) {
//     console.log('Boa tarde');
// } else {
//     console.log('Boa noite!');
// }

const playerOne = "rock"
const computer = "scissors"

if (playerOne === computer) {
    console.log("empate")
} else if (playerOne === "rock") {
    if(computer === "paper"){
        console.log('Computador ganhou!')
    } else {
        console.log('playerOne ganhou!')
    }
} else if (playerOne === "paper") {
    if(computer === "scissors") {
        console.log('Computador ganhou!')
    }else {
        console.log('playerOne ganhou!')
    }
} else {
    if (computer === "rock") {
        console.log('Computador ganhou!')
    }else {
        console.log('playerOne ganhou!')
    }
}