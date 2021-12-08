/*
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */

function triangulos(l1 = 0, l2 = 0, l3 = 0) {
    if (l1 == l2 && l2 == l3) {
        console.log('O triângulo é Equilátero, todos os lados iguais!')
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        console.log('O triângulo é Escaleno, todos os lados diferentes!')
    } else {
        console.log('O triângulo é Isósceles, apenas dois lados iguais!')
    }
}

triangulos(3, 3, 3)
triangulos(2, 2, 1)
triangulos(1, 2, 3)