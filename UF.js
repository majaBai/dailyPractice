
class union_find{
    constructor(n){
        this.map = new Array(n)
        for(let i = 0; i<=n; i++){
            this.map[i] = i
        }
        this.components = n
    }
    isConnected(i, j){
        return this.findRoot(i) === this.findRoot(j)
    }
    findRoot(i){
        while(i != this.map[i]){
             i = this.map[i]
        }
        return i
    }
    _connect(i, j){
        let iRoot = this.findRoot(i)
        let jRoot = this.findRoot(j)
        if(iRoot === jRoot) return
        this.map[jRoot] = iRoot
        this.components--
    }
    connect(arr){
        for(let item of arr){
            this._connect(item[0], item[1])
        }
    }
    getComponents(){
        return this.components
    }
}

function main(){
let n = 10
let u = new union_find(n)
u.connect([[0, 3], [2, 4], [5, 3], [9, 8]])
let num = u.getComponents()
console.log(num)
}

main()