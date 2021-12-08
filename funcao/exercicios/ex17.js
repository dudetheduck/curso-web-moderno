/*
 * Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 * Plano Aumento
 *  A      10%
 *  B      15%
 *  C      20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido
 */

const BRLFormat = (value) => value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

function aumento(plano, salAtual) {
    let aumento = 0
    function msg() {
        console.log(`Seu salário de ${BRLFormat(salAtual)} recebeu um aumento de ${BRLFormat(aumento)}.`)
    }
    switch (plano) {
        case 'A':
            aumento = salAtual * 0.1
            msg()
            break
        case 'B':
            aumento = salAtual * 0.15
            msg()
            break
        case 'C':
            aumento = salAtual * 0.2
            msg()
            break
        default:
            console.log('Plano inválido!')
    }
}

aumento('A', 3000)
aumento('C', 3000)
aumento('B', 3000)