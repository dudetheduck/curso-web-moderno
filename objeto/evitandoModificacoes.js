// Object.preventExtensions
const produto = Object.preventExtensions({ // Cria um objeto que não pode ser extendido
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Verifica se o objeto é extensível

produto.nome = 'Borracha' // ...
produto.descricao = 'Borracha escolar branca' // Não podemos add atributos em um objeto com preventExtensions
delete produto.tag // ...
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // Torna o objeto selado, sem add ou deletar atributos
console.log('Selado:', Object.isSealed(pessoa)) // Verifica se o objeto está selado

pessoa.sobrenome = 'Silva' // Não podemos add atributos em um objeto selado
delete pessoa.nome // Não podemos deletar atributos de um objeto selado
pessoa.idade = 29 // ...
console.log(pessoa)

// Object.freeze = selado + valores constantes