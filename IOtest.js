const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', data =>{
    let temp = data.split(' ')
    console.log(Number(temp[0]) + Number(temp[1]))
    
})