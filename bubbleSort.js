/*
冒泡排序：
一次比较相邻的两个元素，如果前者比后者大，则交换位置，每轮排定一个元素到数组末尾


复杂度： o(n^2)
稳定
原地排序

*/
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j]= temp
}
function bubble(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j ,j+1)
            }
        }
    }
    return arr
}


function main(){
    let a = [5, 4, 2, 7, 10, 1, 3, 2, 10]
    let r = bubble(a)
    console.log(r)
   }
   main()
   