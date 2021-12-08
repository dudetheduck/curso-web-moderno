const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Criando um objeto e passando o prototype como "pai"
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
}) // passando o prototype "pai" e definindo par chave/valor com properties

console.log(filha2.nome)
filha2.nome = 'Carla' // Não altera o valor da chave "nome" pois ela tem "writable: false"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // [ 'nome' ]
console.log(Object.keys(filha2)) // ...

for (let key in filha2) { // percorrendo o object "filha2" com For in
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}