/*
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
 * switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

function numPorExtenso(num) {
    switch (num) {
        case 00:
            console.log('Número zero.')
            break
        case 01:
            console.log('Número um.')
            break
        case 02:
            console.log('Número dois;')
            break
        case 03:
            console.log('Número três.')
            break
        case 04:
            console.log('Número quatro.')
            break
        case 05:
            console.log('Número cinco.')
            break
        case 06:
            console.log('Número seis.')
            break
        case 07:
            console.log('Número sete.')
            break
        case 08:
            console.log('Número oito.')
            break
        case 09:
            console.log('Número nove.')
            break
        case 10:
            console.log('Número dez.')
            break
        default:
            console.log('Número fora do intervalo!')
    }
}

numPorExtenso(5)
numPorExtenso(07)
numPorExtenso(14)