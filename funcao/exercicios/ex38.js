/*
 * Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
 * ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
 * para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */

function iniFim(ini = 0, fim = 100) {
    let impares = []
    if (ini > fim) {
        console.log('Passagem de parâmetros errada! Início maior que o Fim.')
    } else {
        for (ini; ini <= fim; ini++) {
            if (ini % 2 != 0) {
                impares.push(ini)
            }
        }
        console.log(impares)
    }
}

iniFim(0, 10)
iniFim(10, 0)