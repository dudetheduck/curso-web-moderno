/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

let vetor1 = [1, 2, 3, 4]
let vetor2 = [10, 70, 22, 43]

// Imperativo
function apenasPares(vetor) {
    const res = []
    for (let i in vetor) {
        if (vetor[i] % 2 == 0 && i % 2 == 0) {
            res.push(vetor[i])
        }
    }
    return res
}

console.log(apenasPares(vetor1))
console.log(apenasPares(vetor2))

// Declarativo
function somentePares(vetor) {
    return vetor.filter((numero, indice) => {
        const numPar = numero % 2 == 0
        const indicePar = indice % 2 == 0

        return numPar && indicePar
    })
}

console.log(somentePares(vetor1))
console.log(somentePares(vetor2))