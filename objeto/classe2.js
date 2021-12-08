class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extends torna a classe "Avo" como prototype de "Pai"
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // o Super chama o atributo "sobrenome" do prototype de Pai(Avo)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)