/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

// Imperativa
function qtdDigitos(array, num) {
    let res = []
    for (let i in array) {
        if (String(array[i]).length == num) {
           res.push(array[i])
        }
    }
    return res
}

console.log(qtdDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(qtdDigitos([5, 9, 1, 125, 11], 1))

// Declarativa
function quantidadeDigitos(array, num) {
    const strLength = indice => String(indice).length === num
    const res = array.filter(strLength)
    return res
}

console.log(quantidadeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(qtdDigitos([5, 9, 1, 125, 11], 1))