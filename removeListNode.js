/*
输入一个单向链表和一个节点的值，从单向链表中删除等于该值的节点，删除后如果链表中无节点则返回空指针。链表的值不能重复。

输出描述:
输出一行
输出删除结点后的序列，每个数后都要加空格

构造过程，例如输入一行数据为:
6 2 1 2 3 2 5 1 4 5 7 2 2
则第一个参数6表示输入总共6个节点，第二个参数2表示头节点值为2，剩下的2个一组表示第2个节点值后面插入第1个节点值
最后的链表的顺序为 2 7 3 1 5 4

最后一个参数为2，表示要删掉节点为2的值
删除 结点 2

则结果为 7 3 1 5 4

链表长度不大于1000，每个节点的值不大于10000。
测试用例保证输入合法
*/

function removeListNode(list, goalNode){
    for(let i = 0; i< list.length; i++){
        if(list[i] === goalNode){
            list.splice(i, 1)
        }
    }
    return list
}

function createNodelist(head, len, nodeListArgus){
    let arr = new Array(len)
    arr[0] = head
    for(let i = 0; i < nodeListArgus.length; i+=2){
        // 在 nodeListArgus[i+1] 后面插入 nodeListArgus[i]
        insertNode(arr, nodeListArgus[i], nodeListArgus[i+1])
    }
    return arr
}

function insertNode(arr, afterNode, beforeNode){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === beforeNode){
            if(arr[i+1]){
                let temp = arr[i+1]
                arr[i+1] = afterNode
                let j = i + 2
                for(; arr[j] !== undefined; j++){
                    let cur = arr[j]
                    arr[j] = temp
                    temp = cur
                }
                arr[j] = temp
            } else {
                arr[i+1] = afterNode
            }
        }
    }
}


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', data =>{
    let argus = data.split(' ')
    // console.log('argus', argus)

    let len = Number(argus[0])
    let head  = argus[1]
    let nodeToRemove = argus[argus.length - 1]
    let nodeListArgus = argus.slice(2, argus.length-1) 
    // console.log('nodeListArgus', nodeListArgus)
    
    // 构建链表
    let nodeList = createNodelist(head, len, nodeListArgus)
    // console.log('nodeList', nodeList)

    // 删除节点
    let res = removeListNode(nodeList, nodeToRemove)

    // 输出格式
    let r = ''
    for(let n of res){
        r += n + ' '
    }
    console.log(r)
})