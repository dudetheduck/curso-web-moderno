/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir: */

const abc = { a: 1, b: 2, c: 3 }

function inverter(obj) {
    const objInvertido = {}
    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0,
        valor = 1
        objInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objInvertido
}

console.log(inverter(abc))

// Outra forma de resolver usando map e reverse
function invert(obj) {
    const ParChaveValorInvertidos = Object.entries(obj).map( parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(ParChaveValorInvertidos)
}

console.log(invert(abc))