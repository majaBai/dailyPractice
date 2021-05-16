/*

问题描述：有4个线程和1个公共的字符数组。
线程1的功能就是向数组输出A，
线程2的功能就是向字符输出B，
线程3的功能就是向数组输出C，
线程4的功能就是向数组输出D。
要求按顺序向数组赋值ABCDABCDABCD，ABCD的个数由线程函数1的参数指定。

输入
10

输出
ABCDABCDABCDABCDABCDABCDABCDABCDABCDABCD
*/

function getMultiThreads(nums){
    nums = Number(nums)
    let r = ''
    while(nums > 0){
        r += 'ABCD'
        nums--
    }
    console.log(r)
    // return r
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', data =>{
    getMultiThreads(data)
})