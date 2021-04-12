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
    isEmpty(){
        return this.size === 0
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