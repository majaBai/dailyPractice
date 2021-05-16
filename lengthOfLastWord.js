/*
题目描述
计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。

输入描述:
输入一行，代表要计算的字符串，非空，长度小于5000。

输出描述:
输出一个整数，表示输入字符串最后一个单词的长度。

示例1
输入
hello nowcoder

输出
8

说明
最后一个单词为nowcoder，长度为8

*/
function getLength(str){
    let arr = str.split(' ')
    console.log(arr)
    console.log(arr.pop().length)
}

const { stdin, stdout } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
    input:stdin,
    output:stdout
})

rl.on('line', data=>{
    getLength(data)
})