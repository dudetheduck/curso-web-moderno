/*
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
 * todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */

function variableStrings(string1, string2) {
    let estaContido = true

    for (let i = 0; i < string1.length; i++) {
        let charString1 = string1.charAt(i).toLowerCase()
        for (let c = 0; c < string2.length; c++) {
            let charString2 = string2.charAt(c).toLowerCase()
            if (charString1 == charString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(variableStrings('abc', 'cba'))