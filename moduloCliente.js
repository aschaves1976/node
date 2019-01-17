// para importar algo utiliza-se a palavra require
const moduloA = require('./moduloA')
// foi utilizado "./" pois esta referenciando um módulo que esta dentro do nosso sistema
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)