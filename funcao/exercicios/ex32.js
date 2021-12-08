// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let inteiros = [1, 3, 5, 27, 12, 47, 32, 87, 13, 4]

function calcMedia() {
    let total = 0
    for (i in inteiros) {
        total += inteiros[i]
    }
    return total / inteiros.length
}

console.log(calcMedia(inteiros))