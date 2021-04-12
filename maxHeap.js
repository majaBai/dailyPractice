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