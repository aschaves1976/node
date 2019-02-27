const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

// o método abaixo possui o parametro :id
app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

// método POST para submeter
app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    // retornar o produto como resposta
    res.send(produto) // O método SEND gera um JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})