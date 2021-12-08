/*
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

const BRLFormat = (value) => value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

const jurosSimples = (capitalInicial, juros, tempo) => BRLFormat(capitalInicial * juros * tempo)

const jurosCompostos = (capitalInicial, juros, tempo) => BRLFormat(capitalInicial * (1 + juros) ** tempo)

console.log(jurosSimples(1200, 0.02, 14))
console.log(jurosCompostos(620, 0.015, 24))