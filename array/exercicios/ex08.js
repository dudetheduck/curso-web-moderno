/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicar(num, multiplicador) {
    let n = num
    if (num < 0 || multiplicador < 0) {
        return `Número(s) inválido(s)`
    } else {    
        for (let i = 1; i < multiplicador; i++) {
            num += n 
        }
        return num
    }
}

console.log(multiplicar(5, 5))
console.log(multiplicar(7, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(7, -5))