/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function nomeDoMes(numDoMes) {
    switch (numDoMes) {
        case 1:
            console.log(`0${numDoMes}. Janeiro`)
            break
        case 2:
            console.log(`0${numDoMes}. Fevereiro`)
            break
        case 3:
            console.log(`0${numDoMes}. Março`)
            break
        case 4:
            console.log(`0${numDoMes}. Abril`)
            break
        case 5:
            console.log(`0${numDoMes}. Maio`)
            break
        case 6:
            console.log(`0${numDoMes}. Junho`)
            break
        case 7:
            console.log(`0${numDoMes}. Julho`)
            break
        case 8:
            console.log(`0${numDoMes}. Agosto`)
            break
        case 9:
            console.log(`0${numDoMes}. Setembro`)
            break
        case 10:
            console.log(`${numDoMes}. Outubro`)
            break
        case 11:
            console.log(`${numDoMes}. Novembro`)
            break
        case 12:
            console.log(`${numDoMes}. Dezembro`)
            break
        default:
            console.log('Mês inválido!')
    }
}

nomeDoMes(1)
nomeDoMes(4)