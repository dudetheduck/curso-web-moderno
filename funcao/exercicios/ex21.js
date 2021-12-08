/*
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

let pagamento = 100

const BRLFormat = (value) => value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
const msg = (idade, convenio, pagamento) => `Idade: ${idade} anos. \nConvênio: ${convenio} \nQtd à pagar: ${BRLFormat(pagamento)}`

function verificadorIdade(idade, convenio) {
    if (convenio == false) {
        if (idade < 10) {
            pagamento += 80
            return msg(idade, convenio, pagamento)
        } else {
            return 'Acima de 9 anos precisa ter convênio!'
        }
    } else if (convenio == true){
        if (idade >= 10 && idade <= 30) {
            pagamento += 50
            return msg(idade, convenio, pagamento)
        } else if (idade > 30 && idade <= 60) {
            pagamento += 95
            return msg(idade, convenio, pagamento)
        } else if (idade > 60) {
            pagamento += 130
            return msg(idade, convenio, pagamento)
        }
    }
}

console.log(verificadorIdade(95, true))