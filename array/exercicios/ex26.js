/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais. */

// Imperativo
function removerVogais(palavra) {
    let res = ' '
    for (let i in [...palavra]) {
        if (palavra[i] != 'a' && palavra[i] != 'e' && palavra[i] != 'i' && palavra[i] != 'o' && palavra[i] != 'u' ) {
            res = res.concat(palavra[i])
        }
    }
    return res
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))

// Declarativo
function removeVogais(frase) {
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}

// Declarativo 2
const removeVogals = frase => frase.replace(/[aeiou]/ig, '')