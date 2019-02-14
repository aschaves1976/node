const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const genero = g => g.genero === 'F'
const pais = p => p.pais === 'China'
const menorSalario = (func, funcAtual) =>{
    return func.salario > funcAtual.salario ? func : funcAtual
}
   
axios.get(url).then(response =>{
    const funcionarios = response.data
       
    let salario = -1 //filtro[1].salario
    function menor (elem, ind, arr){
        if (salario <= 0){
            salario = elem.salario
        }
         if (elem.salario < salario){
             salario = elem.salario
         }
         return salario
    }
    const filtro = funcionarios.filter(genero).filter(pais).filter(menor).filter(s => s.salario === salario)
 
    console.log('A mulher chinesa com o menor salário é:')
    console.log(filtro)
    console.log(filtro.length)

    const func = funcionarios
    .filter(pais)
    .filter(genero)
    .reduce(menorSalario)

    console.log('A mulher chinesa com o maior salário é:')
    console.log(func)
})