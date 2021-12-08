// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function parEImpar() {
    let pares = 0
    let impares = 0

    for (c in inteiros) {
        if (inteiros[c] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`${pares} pares e ${impares} impares.`)
}

parEImpar()