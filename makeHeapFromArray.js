function makeMaxHeap(arr){
    let N = arr.length
    let res =[]
    for(let i = 1; i <=N; i++){
        res[i] = arr[i-1]
    }
    for(let k = Math.floor(N/2); k>=1; k--){
     sinkForMax(res, k, N)
    }
    return res.slice(1)
}

function sinkForMax(arr, k, N){
    while(2*k <= N){
        let j = 2*k
        if(arr[j] < arr[j+1]) j++
        if(arr[k] > arr[j]) break
        swap(arr, k, j)
        k = j
    }
}

function makeMinHeap(arr){
    let N = arr.length
    let res =[]
    for(let i = 1; i <=N; i++){
        res[i] = arr[i-1]
    }
    for(let k = Math.floor(N/2); k>=1; k--){
     sinkForMin(res, k, N)
    }
    return res.slice(1)
}

function sinkForMin(arr, k, N){
    while(2*k <= N){
        let j = 2*k
        if(arr[j++] < arr[j]) j++
        if(arr[k] < arr[j]) break
        swap(arr, k, j)
        k = j
    }
}
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function main(){
    let test = ['s','o','r','t','e','x','a','m','p','l','e',]
    let r = makeMinHeap(test)
    console.log(r)
}
main()