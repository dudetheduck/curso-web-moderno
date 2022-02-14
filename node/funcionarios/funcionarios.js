const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // const chinesas = funcionarios.filter(pessoa => pessoa.pais == 'China' && pessoa.genero == 'F')
    // // console.log(chinesas)

    // const salarios = chinesas.map(a => a.salario)
    // console.log(Math.min(...salarios))

    // Mulher chinesa com menor salário?
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})
