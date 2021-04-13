/*
find the kth value in array without sorting arr
1 <= k <= arr.length
*/

function quickSelect(arr, k){
    if(k > arr.length) throw new Error('k should be less than or equal to arr.length')
    if(arr.length === 1) return arr[0]
    return select(arr, k, 0, arr.length-1)
}
function select(arr, k, lo, hi){
    let pivot = partition(arr, lo, hi)
    if(pivot === k) return arr[k]
    if(pivot < k) return select(arr, k, pivot+1, hi)
    if(pivot > k) return select(arr,k,lo, pivot-1)
}

function partition(arr, lo, hi){
    let v = arr[lo]
    let p = lo
    for(let i = lo+1; i <= hi; i++){
        if(arr[i] <= v){
            swap(arr, i, ++p)
        }
    }
    swap(arr, lo, p)
    return p
}


function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function main(){
   let t1 = [4, 2], k1 = 1
   let r = quickSelect(t1, k1)
   console.log(r)

   let t2 = [2], k2 = 1
   let r2 = quickSelect(t2, k2)
   console.log(r2)

   let t3 = [4,6,2,6,8,20,3], k3 =3
   let r3 = quickSelect(t3, k3)
   console.log(r3)

}

main()