// Promise.reject('hi')
// .then((res)=>{console.log('11111')}, (res)=>{console.log('222222')})
// .then((res)=>{console.log('33333')}, (res)=>{console.log('4444444')})


function handleArr(arr){
    let r = []
    let temp = {}
    for(let i = 0; i<arr.length; i++){
        let k =  arr[i]
        if(!temp[k]){
            temp[k] = {count: 1, idx :i, val: k}
        } else {
            temp[k].count++
        }
    }
    for(let key in temp){
        r.push(temp[key])
    }
    return r
}

/*
## 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
找到所有出现两次的元素。
你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
输入:
[4,3,2,7,8,2,3,1]
输出:
[2,3]
*/

function findDuplicates(arr){
    let n = arr.length
    let r = []
    for(let i = 0; i < n; i++){
        let val = arr[i]
        while(val > n){
            val -= n
        }
        // 因为 1 ≤ a[i] ≤ n ，不会超过数组长度 n, 所以 a[i] - 1 一定在  0 ~ n-1 之间，恰好可以做数组的下标
        arr[val-1] += n 
    }
    for(let i = 0; i< arr.length; i++){
        let val = arr[i]
        // 2*n 表示叠加了两次，则元素出现了两次
        if(val > 2*n){
            r.push(i + 1)
        }
    }
    return r
}
function main(){
    // let test = [1, 2, 3, 2, 5, 6, 8, 5, 2, 4, 3]
    // let r = handleArr(test)
    // for(let v of r){
    //     console.log('val:',v.val, '; count:',v.count, '; index:',v.idx + '\n')
    // }

    let a = findDuplicates([4,3,2,7,8,2,3,1])
    console.log(a)
}
main()
