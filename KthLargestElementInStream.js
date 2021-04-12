/*
Design a class to find the kth largest element in a stream. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:
KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Returns the element representing the kth largest element in the stream.

Example 1:

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

Constraints:

1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
At most 104 calls will be made to add.
It is guaranteed that there will be at least k elements in the array when you search for the kth element.
*/
class MinHeap{
    constructor(){
        this.size = 0
        this.heap = []
    }
    push(val){
        this.heap[++this.size] = val
        this.swim(this.size)
    }
    pop(){
        let res = this.heap[1]
        this.swap(1, this.size--)
        this.heap[this.size + 1] = undefined
        this.sink(1)
        return res
    }
    top(){
        return this.heap[1]
    }
    swim(idx){
        while(Math.floor(idx/2) > 0 && this.greater(Math.floor(idx/2), idx)){
            this.swap(Math.floor(idx/2), idx)
            idx = Math.floor(idx/2)
        }
    }
    sink(idx){
        while(idx *2 <= this.size){
            let j = idx *2
            if(this.greater(j, j+1)) j++
            if(this.greater(j, idx)) break
            this.swap(idx, j)
            idx = j
        }
    }
    getSize(){
        return this.size
    }
    greater(i, j){
        return this.heap[i] > this.heap[j]
    }
    swap(i, j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
}
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.heap = new MinHeap()
    this.rank = k
    for(let num of nums){
        if(this.heap.getSize() < k){
            this.heap.push(num)
        } else {
            let top = this.heap.top()
            if(num > top){
                this.heap.pop()
                this.heap.push(num)
            }
        }
    }
 };
 
 /** 
  * @param {number} val
  * @return {number}
  */
 KthLargest.prototype.add = function(val) {
    if(this.heap.getSize() < this.rank){
        this.heap.push(val)
        if(this.heap.getSize() === rank){
            return this.heap.top() 
        }else {
            throw new Error('there should be at least k elements in the array when you search for the kth element.')
        }
    }
    let top = this.heap.top()
    if(top >= val){
        return top
    } else {
        this.heap.pop()
        this.heap.push(val)
        return this.heap.top()
    }
 };
 
 /** 
  * Your KthLargest object will be instantiated and called as such:
  * var obj = new KthLargest(k, nums)
  * var param_1 = obj.add(val)
  */

  function main(){
    let kthLargest = new KthLargest(1, []);
    let r1 = kthLargest.add(-3)
    console.log(r1);   // return -3
    console.log(kthLargest.add(-2));   // return -2
    console.log(kthLargest.add(-4));  // return -2
    console.log(kthLargest.add(0));   // return 0
    console.log(kthLargest.add(4));   // return 4
  }
  main()