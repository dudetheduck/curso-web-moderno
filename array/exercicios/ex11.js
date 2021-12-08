/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array: */

primeiroEUltimo = vetor => [vetor[0], vetor[vetor.length - 1]]
 
console.log(primeiroEUltimo([3, 14, "Olá"]))
console.log(primeiroEUltimo([-100, "Aplicativo", 16]))