// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

const somaArray = vetor => vetor.reduce(function(acumulador, atual) {
    return acumulador + atual
})

const somaArray = vetor => vetor.reduce((acumulador, atual) => acumulador + atual)

console.log(somaArray([10, 10, 10]))
console.log(somaArray([15, 15, 15, 15]))