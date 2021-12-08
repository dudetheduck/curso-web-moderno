/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

// Imperativo
function search(inicio, palavras) {
    let res = []
    for (let palavra of palavras) {
        if (palavra.includes(inicio)) {
            res.push(palavra)
        }
    }
    return res
}

console.log(search('pro', ['programação', 'mobile', 'profissional']))
console.log(search('python', ['javascript', 'java', 'c++']))

// Declarativo
function buscarPalavras(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}