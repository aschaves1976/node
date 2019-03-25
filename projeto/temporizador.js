const schedule = require('node-schedule')
/**
 *  
 * 
 *  */
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 1', function(){
    console.log('Executando tarefa1 ', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa1 ...')
}, 20000)

// regra de recorrencia utilizando a funcao RecurrenceRule do JS
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // execucao de segunda a sexta
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a Tarefa2 ', new Date().getSeconds())
})