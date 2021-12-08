/*
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
 * e imprime a quantidade no console.
 */

let inteiros = [1, -3, 5, -27, 12, -47, 32, 87, -13, 4]

function contarNegativos(vetor) {
    let qtdNegativos = 0
    for (i in inteiros) {
        if (inteiros[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

console.log(contarNegativos(inteiros))