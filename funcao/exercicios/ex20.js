/*
 * Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function retirarDinheiro(valor) {
    let notasDe100 = 0
    let notasDe50 = 0
    let notasDe10 = 0
    let notasDe5 = 0
    let notasDe1 = 0

    console.log(`Valor pedido: R$ ${valor}.`)

    if (valor < 100) {

    } else {
        while (valor >= 100) {
            valor -= 100
            notasDe100++
        }
        console.log(`${notasDe100} nota(s) de R$ 100.`)
    }
   
    if (valor < 50) {

    } else {
        while (valor >= 50) {
            valor -= 50
            notasDe50++
        }
        console.log(`${notasDe50} nota(s) de 50.`)
    }
    
    if (valor < 10) {

    } else {
        while (valor >= 10) {
            valor -= 10
            notasDe10++
        }
        console.log(`${notasDe10} nota(s) de R$ 10.`)
    }
    
    if (valor < 5) {

    } else {
        while (valor >= 5) {
            valor -= 5
            notasDe5++
        }
        console.log(`${notasDe5} nota(s) de R$ 5.`)
    }
   
    if (valor < 1) {

    } else {
        while (valor >= 1) {
            valor -= 1
            notasDe1++
        }
        console.log(`${notasDe1} nota(s) de R$ 1.`)
    }   
}

retirarDinheiro(59)