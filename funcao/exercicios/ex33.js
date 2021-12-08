/*
 * Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
 * quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
 * Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
 * mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

let vetorInteiro = [2, 4, 8, 10]
let vetorString = ['João', 'Paulo', 'Cleber', 'Gerson']
let vetorDouble = [3.4, 2.2, 7.6, 10.5]

function unirVetores(...args) {
    let res = []
    for (let i = 0; i < arguments.length; i++) {
        res = res.concat(arguments[i])
    }
    return res
}

console.log(unirVetores(vetorInteiro, vetorDouble))
console.log(unirVetores(vetorDouble, vetorString))