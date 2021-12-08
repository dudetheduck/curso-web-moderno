// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa!
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' } // definindo o prototype de pai como "avo"
const filho = { __proto__: pai, attr3: 'C' } // definindo o prototype de filho como "pai"
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta ,+ this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // o super.status() referencia o status do outro object
    }
}

Object.setPrototypeOf(ferrari, carro) // Setando o prototype de ferrari como "carro"
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // { modelo: 'F40', velMax: '324' }
console.log(volvo) // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())