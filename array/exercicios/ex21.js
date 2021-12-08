// Criar uma função que receba um array de números e retorne o menor número desse array.

// Imperativo
function menorNum(array) {
    let menor = array[0]
    for (let i in array) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return menor
}

console.log(menorNum([10, 5, 35, 65]))
console.log(menorNum([5, -15, 50, 3]))

// Declarativo com reduce
function menorNumeroReduce(numeros) {
    return numeros.reduce((acumulador, atual) => acumulador < atual ? acumulador : atual)
}

console.log(menorNumeroReduce([10, 5, 35, 65]))
console.log(menorNumeroReduce([5, -15, 50, 3]))

// Declarativo com Math.min
const lowNum = num => Math.min(...num)
console.log(lowNum([10, 5, 35, 65]))
console.log(lowNum([5, -15, 50, 3]))