/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento: */

const objeto1 = {
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
}

const objeto2 = {
    codigo: 11111,
    preco: 12000
}

// Imperativo
function apenasArrays(obj) {
    let vetor1 = []
    let vetor2 = []
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    for (let i = 0; i < keys.length; i++) {
        vetor1.push(keys[i], values[i])
        vetor2.push(keys[++i], values[i++])
    }
    return [vetor1, vetor2]
}

console.log(apenasArrays(objeto1))

// Imperativo 2
function objToArray(obj) {
    const res = []
    for (let i in obj) {
        res.push([i, obj[i]])
    }
    return res
}

console.log(objToArray(objeto1))

// Declarativo
const objetoParaArray = obj => Object.entries(obj)
console.log(objetoParaArray(objeto1))