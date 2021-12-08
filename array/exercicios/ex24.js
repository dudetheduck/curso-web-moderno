/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas. */

// Imperativo
function contarCaractere(letra, frase) {
    let split = frase.split('')
    let contador = 0
    for (let i in split) {
        if (letra == split[i]) {
            contador++
        }
    }
    return contador
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))

// Declarativo
function contarCaractere(letra, frase) {
    return [...frase].filter(caractere => caractere === letra).length
}

// const contarCaractere = (letra, frase) => [...frase].filter(char => char === letra).length

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))