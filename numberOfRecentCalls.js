/*
You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.


Constraints:
1 <= t <= 109
Each test case will call ping with strictly increasing values of t.
At most 104 calls will be made to ping.

*/

var RecentCounter = function() {
    this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
// 方法1
// RecentCounter.prototype.ping = function(t) {
//     //Adds a new request at time t
//     this.requests.push(t)
//     let min = t - 3000
//     let count = 0
//     for(let i = 0; i< this.requests.length; i++){
//         let item = this.requests[i]
//         if(item >= min && item <= t){
//             count++
//         }
//     }
//     // returns the number of requests that has happened in the past 3000 milliseconds 
//     return count
// };

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

 // 方法2，由于时间t 是递增的，可以优化过期的request
 RecentCounter.prototype.ping = function(t){
     this.requests.push(t)
     let min = t-3000
     while(this.requests[0] < min){
         this.requests.shift()
     }
     return this.requests.length
 }
function main(){
    var obj = new RecentCounter()
    var param_1 = obj.ping(1)
    var param_2 = obj.ping(100)
    var param_3 = obj.ping(3001)
    var param_4 = obj.ping(3002)
    var param_5 = obj.ping(5002)
    console.log(param_1, param_2, param_3,param_4,param_5)
}

main()