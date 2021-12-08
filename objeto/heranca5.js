console.log(typeof String) // function
console.log(typeof Array) // ...
console.log(typeof Object) // ...

// Toda function tem um atributo ".prototype"
String.prototype.reverse = function () { // Alterando o comportamento de todas Strings
    return this.split('').reverse().join('') // o .split separa todos caracteres, o .reverse deixa ao contrário e o .join junta os caracteres novamente
}

console.log('Escola Cod3r'.reverse()) // r3doC alocsE

Array.prototype.first = function () { // Alterando o comportamento de todos Arrays
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // Retorna o primeiro indice do array(1)
console.log(['a', 'b', 'c'].first()) // Retorna ('a')

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())