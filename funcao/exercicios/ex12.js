// Faça um algoritmo que calcule o fatorial de um número.

function fatorial (n1) {
    let res = n1
    for (let i = 1; i < n1; i++) {
        res *= i
    }
    return res
}

console.log(fatorial(5))