const fs = require('fs')

//leitura do arquivo.json
//__dirname é uma constante que representa o diretório atual
const caminho = __dirname + '/arquivo.json'

// sincrono - não é uma das melhores formas, pois o programa fica parado até o término da leitura
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`
    ${config.db.host}:${config.db.port}`)
})

//Forma mais simples para a leitura de um arquivo JSON
// Esta forma é sincrona
const config = require('./arquivo.json')
console.log(config.db)

//Leitura do conteúdo de uma pasta
const dir = 'C:/ASChaves'
fs.readdir(__dirname, (err, conteudo)=>{
    console.log('Conteúdo da pasta ...')
    console.log(conteudo)
})
fs.readdir(dir, (err, conteudo)=>{
    console.log(`
    `)
    console.log(conteudo)
})