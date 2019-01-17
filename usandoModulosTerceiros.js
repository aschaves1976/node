// utiliza-se o underline para referenciar o lodash
const _ = require('lodash')
/**
 * Gerar um número randomico, utilizando função do lodash e a função setInteval
 * para ficar executando de tempos em tempo, neste caso a cada 2 segundos
 */

 setInterval(
     ()=> console.log(_.random(5,10)), 2000
     )