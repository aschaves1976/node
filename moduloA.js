// formas de exportar algo de dentro dos módulos do Node para outro arquivo
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem Vindo ao Node'
// this e exports são objetos, portanto são coleções de chaves e valores
// a forma abaixo é mais clássica
module.exports.ateLogo = 'Até o próximo exemplo'