/*
快排：
复杂度： o(nlgn)
不稳定
原地排序

*/

function quickSort(arr){
    sort(arr, 0, arr.length-1)
}

function sort(arr, lo, hi){
    if(lo >=hi) return
    let mid = partition(arr, lo, hi)
    // arr[lo] - arr[mid-1] < arr[mid]
    // arr[mid+1] - arr[hi] >= arr[mid]
    sort(arr, lo, mid -1)
    sort(arr, mid+1, hi)
}

function partition(arr, lo, hi){
    let pivot = arr[lo]
    let i = lo, j = hi + 1
    while(true){
        while(arr[++i] < pivot){
            if(i == hi) break
        }
        while(arr[--j] >= pivot){
            if(j = lo) break
        }
        if(i >= j) break
        swap(arr, i, j)
    }
    swap(arr, lo, j)
    return j
}

function quick2(arr){
    if(arr.length <= 1) return
    let rest = arr.slice(0)
    let left = quick2(rest.filter(val => val < arr[0]))
    let right = quick2(rest.filter(val => val >= arr[0]))
    return left.concat([a[0]], right)
}