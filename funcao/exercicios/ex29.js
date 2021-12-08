/*
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações
 */

let vetor = [1, 5, 10, 14, 15, 17, 20, 25, 32, 48, 74]

function intervalo(vetor) {
    let entreDezEVinte = 0
    let outrosNumeros = 0
    for (c in vetor) {
        if (vetor[c] >= 10 && vetor[c] <= 20) {
            entreDezEVinte++
        } else {
            outrosNumeros++
        }
    }
    console.log(entreDezEVinte, outrosNumeros)
}

intervalo(vetor)