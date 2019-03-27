const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    /**
     * process.stdout = utilizar o processo de saida padrão 
     * write = escrever
     */
    process.stdout.write('Fala ae Anonimo!!\n')
    process.exit
}else{
    process.stdout.write('Informe o seu nome: ')
/**
 *  process.stdin = utilizar o processo de entrada padrão
 */
    process.stdin.on('data', data =>{
        /**
         * nome está armazenando o valor informado via teclado e 
         * está substituindo o enter do teclado por nulo
         */
        const nome = data.toString().replace('\r\n','') 
        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}