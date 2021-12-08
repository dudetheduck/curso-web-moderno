/* 
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 * ou false.
 */

const divPor3 = n1 => n1 % 3 == 0 ? 'True' : 'False'

console.log(divPor3(30))
console.log(divPor3(3))
console.log(divPor3(27))
console.log(divPor3(14))