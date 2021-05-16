/*
判断两个数是否互质，即公约数只有 1

*/

function isPrimeRelatively(a, b){
    if(a < b) {
        return isPrimeRelatively(b, a)
    }

    while(a % b){
        let temp = b
        b = a % b
        a = temp
    }

    return b === 1
}

function main(){
    let r = isPrimeRelatively(3, 7)
    console.log(r)
    // console.log(isPrimeRelatively(3, 2))
}
main()