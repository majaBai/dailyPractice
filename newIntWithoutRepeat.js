/*
输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
保证输入的整数最后一位不是0。
输入描述:
输入一个int型整数

输出描述:
按照从右向左的阅读顺序，返回一个不含重复数字的新的整数

输入
9876673
输出
37689

*/

function getIntWithoutRepeat(int){
    let intStr = int + ''
    let temp = []
    for(let i = intStr.length-1; i>=0; i--){
        if(!temp.includes(intStr[i])){
            temp.push(intStr[i])
        }
    }
    let newInt = Number(temp.join(''))
    console.log(newInt)
    // return newInt
}

const readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.on('line', data =>{
    getIntWithoutRepeat(data)
})