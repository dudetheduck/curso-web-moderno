// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(nums) {
    const ordem = nums.sort((a, b) => a < b ? 1 : -1)
    return ordem[1]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))