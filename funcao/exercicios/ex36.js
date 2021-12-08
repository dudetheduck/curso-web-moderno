/*
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
 * elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
 * o valor do elemento for maior que 5.
 */

let elementos = [2, 4, 5, 6, 7, 8]

function multTodos(multiplicador) {
    let resultado = []
    for (i in elementos) {
        resultado.push(elementos[i] * multiplicador)
    }
    return resultado
}

function multMaiorQueCinco(multiplicador) {
    let resultado = []
    for (i in elementos) {
        if (elementos[i] > 5) {
            resultado.push(elementos[i] * multiplicador)
        }
    }
    return resultado
}

console.log(multTodos(2))
console.log(multMaiorQueCinco(2))