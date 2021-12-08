/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

let produtos1 = [
    { nome: 'Jornal online', categoria: 'Informação', preco: 89.99 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
]

let produtos2 = [
    { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
    { nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90 }
]

// Imperativo
function despesasTotais(vetor) {
    let precos = []
    for (let i = 0; i < vetor.length; i++) {
        precos.push(vetor[i].preco)
    }

    const res = precos.reduce((acumulador, atual) => acumulador + atual)
    return res
}

// const despesasTotais = vetor => vetor.reduce((acumulador, atual) => acumulador + atual.preco, 0)

console.log(despesasTotais(produtos1))
console.log(despesasTotais(produtos2))

// Declarativo com for of
function despesasTot(itens) {
    let total = 0
    for (let item of itens) {
        total += item.preco
    }
    return total
}

console.log(despesasTot(produtos1))
console.log(despesasTot(produtos2))