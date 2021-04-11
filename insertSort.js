/*
插入排序（适合用于部分有序的情况）：
将未排序部分的第一个元素插入已排序部分的适当位置

复杂度： o(n^2)
稳定
原地排序

*/
function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i]
        let j = i -1
        while(j >=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] =key
    }
    return arr
}


function main(){
 let a = [5, 4, 2, 7, 10, 1, 3, 2, 10]
 let r = insertSort(a)
 console.log(r)
}
main()

