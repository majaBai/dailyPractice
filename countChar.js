/*
题目描述
输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出。
本题含有多组样例输入

输入描述:
一个只包含小写英文字母和数字的字符串。

输出描述:
一个字符串，为不同字母出现次数的降序表示。若出现次数相同，则按ASCII码的升序输出。

输入
aaddccdc
1b1bbbbbbbbb

输出
cda
b1
*/



function countChar(str){
    let obj = {}
    for(let s of str){
        if(obj[s]){
            obj[s].count ++
        } else {
            obj[s] = {}
            obj[s].char = s
            obj[s].count = 1
        }
    }
    let keys = Object.keys(obj)
    let temp = []
    for(let k of keys){
        temp.push(obj[k])
    }

    temp.sort(function(a, b){
        if(a.count < b.count){
            return 1
        } else if(a.count > b.count){
            return -1
        } else {
            return a.char.charCodeAt(0) - b.char.charCodeAt(0)
        }
    })
    
    let r = ''
    for(let item of temp){
        r += item.char
    }
    console.log(r)
    // return r
}

// function main(){
//     let s = countChar('1b1bbbbbbbbb')
//     console.log(s)
// }

// main()

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', data =>{
    countChar(data)
})