/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  
Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)


*/

class MaxHeap{
    constructor(){
        this.heap = []
        this.size = 0
    }
    push(val){
        this.heap[++this.size] = val
        this.swim(this.size)
    }
    pop(){
        let r = this.heap[1]
        this.swap(1, this.size--)
        this.heap[this.size+1] = undefined
        this.sink(1)
        return r
    }
    top(){
        return this.heap[1]
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    swim(idx){
        while(Math.floor(idx/2) > 0 && this.greater(idx, Math.floor(idx/2))){
            this.swap(idx, Math.floor(idx/2))
            idx = Math.floor(idx/2)
        }
    }
    sink(idx){
        while(idx*2 <= this.size){
            let j = idx * 2
            if(this.greater(j+1, j)) j++
            if(this.greater(idx, j)) break
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
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let heap = new MaxHeap()
    for(let v of stones){
        heap.push(v)
    }
    while(heap.getSize() > 1){
        let top1 = heap.pop()
        let top2 = heap.pop()
        if(top1 != top2){
            heap.push(Math.abs(top1-top2))
        }
    }
    return heap.top()?heap.top(): 0
};

function main(){
    let t1 = [2,7,4,1,8,1]  // 1
    let r1 = lastStoneWeight(t1)
    console.log(r1)

    let t2 = [2,2] // 0
    let r2 = lastStoneWeight(t2)
    console.log(r2) 

    let t3 = [2,2, 4, 4, 3] // 1
    let r3 = lastStoneWeight(t3)
    console.log(r3) 
}
main()