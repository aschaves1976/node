console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3
console.log(module.exports)
exports = null
console.log('Nada muda. ', module.exports)
exports = {
    aluno: 'João'
}
console.log('Nada muda. ', module.exports)

module.exports = {publico : true}