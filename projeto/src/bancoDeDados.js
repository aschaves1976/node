const sequence = {
    _id: 1,
    get id() {return this._id++} //retorna o incremento do id
}

// constante produto que será um objeto e terá como chave o id do produto
const produtos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// pegar o produto por ID
// caso produto esteja vazio ou undeffined será retornado um objeto vazio
function getProduto(id){
    return produtos[id] ||{}
}

// retornar todos os produtos
function getProdutos(){
    return Object.values(produtos) // retornar apenas os valores
}

// excluir produtos
function removeProduto(id){
    const removedPrd = produtos[id]
    delete produtos[id]
    return removedPrd
}
module.exports = {salvarProduto, getProduto, getProdutos, removeProduto}