/*
题目描述
给出一个名字，该名字有26个字符串组成，定义这个字符串的“漂亮度”是其所有字母“漂亮度”的总和。
每个字母都有一个“漂亮度”，范围在1到26之间。没有任何两个字母拥有相同的“漂亮度”。字母忽略大小写。

给出多个名字，计算每个名字最大可能的“漂亮度”。

本题含有多组数据。

输入描述:
整数N，后续N个名字

输出描述:
每个名称可能的最大漂亮程度
*/


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.sdtout
})

rl.on('line', data =>{
    if(!(/\d/.test(data))){
        beautyOfName(data)
    }
})
function beautyOfName(name){
    let obj = {}
    for(let c of name){
        if(obj[c]){
            obj[c]++
        } else{
            obj[c] = 1
        }
    }

    let keys = Object.keys(obj)

    let res = 0
    let temp = []
    for(let k of keys){
        temp.push(obj[k])
    }

    temp.sort(function(a, b){
        return b - a
    })
    
    let base
    for(let i = 0; i < temp.length; i++){
        base = 26 - i
        res += (base * temp[i])
    }
    
    console.log(res)
    // return res
}