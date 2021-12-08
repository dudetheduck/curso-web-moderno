/*
 * O cardápio de uma lanchonete é o seguinte:
 * Código | Descrição do Produto | Preço
 *  100   | Cachorro Quente      | R$ 3,00
 *  200   | Hambúrguer Simples   | R$ 4,00
 *  300   | Cheeseburguer        | R$ 5,50
 *  400   | Bauru                | R$ 7,50
 *  500   | Refrigerante         | R$ 3,50
 *  600   | Suco                 | R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente.
 */

const BRLFormat = (value) => value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

function lanchonete(codigo = 500, qtd = 1) {
    let preco, total = 0
    switch (codigo) {
        case 100:
            preco = 3.00
            total = preco * qtd
            console.log(`Você pediu ${qtd} Cachorro(s) Quente(s), total de ${BRLFormat(total)}`)
            break
        case 200:
            preco = 4.00
            total = preco * qtd
            console.log(`Você pediu ${qtd} Hambúrguer Simples, total de ${BRLFormat(total)}`)
            break
        case 300:
            preco = 5.50
            total = preco * qtd
            console.log(`Você pediu ${qtd} Cheeseburguer(s), total de ${BRLFormat(total)}`)
            break
        case 400:
            preco = 7.50
            total = preco * qtd
            console.log(`Você pediu ${qtd} Bauru(s), total de ${BRLFormat(total)}`)
            break
        case 500:
            preco = 3.50
            total = preco * qtd
            console.log(`Você pediu ${qtd} Refrigerante(s), total de ${BRLFormat(total)}`)
            break
        case 600:
            preco = 2.80
            total = preco * qtd
            console.log(`Você pediu ${qtd} Suco(s), total de ${BRLFormat(total)}`)
            break
        default:
            console.log('Produto não existente.')
    }
}

lanchonete(100, 2)
lanchonete(200, 1)
lanchonete(300, 1)
lanchonete(400, 2)
lanchonete(500, 4)
lanchonete(600, 3)
lanchonete()
lanchonete(700, 7)