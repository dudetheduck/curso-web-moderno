/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

// Imperativo
function repetir(valor, repetidor) {
    let vetor = []
    for (let i = 0; i < repetidor; i++) {
        vetor.push(valor)
    }
    return vetor
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))

// Declarativo
function repetir2(item, qtd) {
    return Array(item).fill(qtd)
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))