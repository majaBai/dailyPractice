/*
选择排序：
数组被分为 sorted 和 unsorted （初始情况默认整个数组是 unsorted)
每次选择 unsorted 中的最小元素与其第一个元素交换

复杂度： o(n^2)
不稳定
原地排序

*/
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j]= temp
}
function selectSort(arr){
    for(let i = 0; i <arr.length-1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min != i){
            swap(arr, i, min)
        }
    }
    return arr
}