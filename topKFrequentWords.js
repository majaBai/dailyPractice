/*
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower alphabetical order comes first.

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
              Note that "i" comes before "love" due to a lower alphabetical order.

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
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
    pop(){
        let res = this.heap[1]
        this.swap(1, this.size--)
        this.heap[this.size+1] = undefined
        this.sink(1)
        return res
    }
    getSize(){
        return this.size
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
        while(idx * 2 <= this.size){
            let j = idx * 2
            if(j + 1 <= this.size && this.greater(j, j+1)) j++
            if(this.greater(j, idx)) break
            this.swap(j, idx)
            idx = j
        }
    }
    greater(i, j){
        if(this.heap[i].count != this.heap[j].count){
            return this.heap[i].count > this.heap[j].count
        } else {
            return this.heap[i].str < this.heap[j].str
        }
    }
    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
}


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {}
    let res = []
    let heap = new MinHeap()
    for(let item of words){
        if(!obj[item]){
            obj[item] = {}
            obj[item].str = item
            obj[item].count = 1
        } else {
            obj[item].count += 1
        }
        
    }
    for(let key in obj){
        if(heap.getSize() < k){
            heap.push(obj[key])
        } else {
            let top = heap.top()
            if(top.count < obj[key].count || (top.count === obj[key].count && obj[key].str < top.str)){
                heap.pop()
                heap.push(obj[key])
            }
        }
    }

    while(heap.getSize()){
        console.log('top', heap.top())
        res.unshift(heap.pop().str)
    }
    return res
};

function main(){
    let t1 = ["i", "love", "leetcode", "i", "love", "coding"], k1 = 3
    let r1 = topKFrequent(t1, k1)
    console.log(r1)

    // let t2 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k2 = 4
    // let r2 = topKFrequent(t2, k2)
    // console.log(r2)
}
main()