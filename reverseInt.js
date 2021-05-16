/*
题目描述
输入一个整数，将这个整数以字符串的形式逆序输出
程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001

输入描述:
输入一个int整数

输出描述:
将这个整数以字符串的形式逆序输出

示例1
输入
1516000
输出
0006151

*/

/**
 * @param {number} int
 * @return {string}
 */

 function reverseInt(int){
     let str = int + ''
     let r =''
     for(let i = str.length-1; i >= 0; i--){
         r += str[i]
     }
     console.log(r)
 }

const { read } = require('fs')
//  function main(){
//      let r = reverseInt(189023)
//      console.log(r === '320981')
//  }
//  main()

const readline = require('readline')
 
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
 
r1.on('line', data => {
     
    // console.log(data.toString().split('').reverse().join(''))
     reverseInt(data)
})

