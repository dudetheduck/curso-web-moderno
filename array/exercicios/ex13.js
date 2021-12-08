/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

// Imperativo
function filtrarNums(vetor) {
    const res = []
    for (let i in vetor) {
        if (typeof vetor[i] === "number") {
            res.push(vetor[i])
        }
    }
    return res
}

console.log(filtrarNums(["Javascript", 1, "3", "web", 20]))
console.log(filtrarNums(["a", "c"]))

// Declarativo
function filtrarNums(vetor) {
    return vetor.filter(item => typeof item === "number")
}

console.log(filtrarNums(["Javascript", 1, "3", "web", 20]))
console.log(filtrarNums(["a", "c"]))