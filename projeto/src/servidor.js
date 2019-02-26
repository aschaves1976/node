const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'Notebook', preço: 1234.98}) // este objeto sera convertido para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})