// middelware pattern (chain of responsibility)
// O código abaixo exemplifica um padrão de projeto.
// É um código flexível, permitindo que as funções passo sejam utilizadas de forma
// aleatória, sem a necessidade de serem encadeadas uma com a outra

const passo1 = (ctx, next)=>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
 ctx.valor2 = 'mid2'
 next()   
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo2, passo1, passo3)
console.log(ctx)
