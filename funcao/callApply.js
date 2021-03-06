function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // invocando a function usando os param globalThis
console.log(produto.getPreco()) // usando o object "produto"

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Diferenças entre call e apply
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(globalThis, [0.17, '$']))