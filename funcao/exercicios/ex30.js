// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let inteiros = [1, 3, 5, 27, 12, 47, 32, 87, 13, 4]

function maiorEMenor(vetor) {
    let maior
    let menor
    for (i in inteiros) {
        if (maior === undefined && menor === undefined) {
            maior = inteiros[i]
            menor = inteiros[i]
        } else {
            if (inteiros[i] > maior) {
                maior = inteiros[i]
            }
            if (inteiros[i] < menor) {
                menor = inteiros[i]
            }
        }
    }
    return `Maior número: ${maior} \nMenor número: ${menor}`
    // return [maior, menor]
}

console.log(maiorEMenor(inteiros))