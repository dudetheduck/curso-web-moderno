/*
 * Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
 * parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
 * anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
 * compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

const BRLFormat = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})

const jurosCompostos = (capitalInicial, juros, tempo) => BRLFormat(capitalInicial * (1 + juros) ** tempo)

function anuidade(mes, capitalInicial) {
    if (mes > 0 && mes < 13) {
        const tempo = mes - 1
        return BRLFormat(jurosCompostos(capitalInicial, 0.05, tempo))
    } else {
        return `Mês inválido!`
    }
}

console.log(anuidade(12, 1000))