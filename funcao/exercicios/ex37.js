/*
 * Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
 * como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
 * bem como a soma dos elementos.
 */

function progressaoAritmetica(n, a1, r) {
    let vetor = []
    for (let c = 0; c < n; c++) {
        vetor.push(a1 + r * c)
    }
    console.log(`${vetor}; Soma: ${ n * (a1 + (a1 + ((n - 1) * r))) / 2 }\n`)
}

function progressaoGeometrica(n, a1, r) {
    let vetor = []
    for (let c = 0; c < n; c++) {
        vetor.push(a1 * (r ** c))
    }
    console.log(`${vetor}; Soma: ${ (a1 * ((r ** n) - 1)) / (r - 1) }`)
}

progressaoAritmetica(5, 1, 4)
progressaoGeometrica(5, 1, 4)