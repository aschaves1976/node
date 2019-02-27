const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

/**
 * qualquer requisição que você faça no servidor utilizando express
 * ele irá passar pelo Middleware (bodyParser.urlencoded({extended: true}))
 * e se o corpo da requisição tiver um padrão URL Encoded, então o 
 * middleware fará um parse que irá transformar em objeto, para que seja possível
 * acessar os dados da requisição no formato  nome: req.body.name,
 */
app.use(bodyParser.urlencoded({extended: true}))

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
        nome: req.body.nome,
        preco: req.body.preco
    })
    // retornar o produto como resposta
    res.send(produto) // O método SEND gera um JSON
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    // retornar o produto como resposta
    res.send(produto) // O método SEND gera um JSON
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.removeProduto(req.params.id)
    // retornar o produto como resposta
    res.send(produto) // O método SEND gera um JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})