/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function simboloMais(qtd) {
    let str = ''
    for (let i = 0; i < qtd; i++) {
        str = str.concat('+')
    }
    return str
}

console.log(simboloMais(2))
console.log(simboloMais(4))

// Resolução 2:
const simboloMais2 = qtd => "+".repeat(qtd)
console.log(simboloMais2(2))
console.log(simboloMais2(4))