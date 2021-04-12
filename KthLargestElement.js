/*
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Constraints:
1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap{
    constructor(){
        this.heap = []
        this.size = 0
    }
    push(val){
        this.heap[++this.size] = val
        this.swim(this.size)
    }
    pop() {
        const ret = this.heap[1]
        this.swap(1, this.size--)
        this.heap[this.size + 1] = undefined
        this.sink(1)
        return ret
    }
    getSize(){
        return this.size
    }
    
    top(){
        return this.heap[1]
    }
    swim(idx){
        while(idx > 0 && this.greater(Math.floor(idx / 2), idx)){
            this.swap(Math.floor(idx / 2), idx)
            idx = Math.floor(idx / 2)
        }
    }
    sink(idx){
        while(2 * idx < this.size){
            let j = 2 * idx
            while(j <this.size && this.greater(j, j+1)) j++
            if(!this.greater(idx, j)) break
            this.swap(idx, j)
            idx = j
        }
    }
    greater(i, j){
        return this.heap[i] > this.heap[j]
    }
    swap(i, j){
        let temp = this.heap[i]
        this.heap[i] =  this.heap[j]
        this.heap[j] = temp
    }
}
var findKthLargest = function(nums, k) {
    let heap = new MinHeap()
    for(let i = 0; i< nums.length; i++){
        if(heap.getSize() < k){
            heap.push(nums[i])
        } else {
            let top = heap.top()
            if(top < nums[i]){
                heap.pop()
                heap.push(nums[i])
            }
        }
    }
    return heap.top()
};

function main(){
   let t1 = [3,2,1,5,6,4], k1 = 2
   let r1 = findKthLargest(t1, k1)
   console.log(r1)

   let t2 = [3,2,3,1,2,4,5,5,6], k2 = 4
   let r2 = findKthLargest(t2, k2)
   console.log(r2)
}

main()

