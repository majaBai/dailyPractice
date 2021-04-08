/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning 
and the kth node from the end (the list is 1-indexed).

Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}

function swapArr(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
var swapNodes = function(head, k) {
  let arr =[]
  let cur = head
  while(cur != null){
      arr.push(cur)
      let next = cur.next
      cur.next = null
      cur = next
  }
  let orderFromEnd = arr.length - k
  swapArr(arr, k-1, orderFromEnd)
  
  for(let i =0; i < arr.length; i++){
      if(arr[i+1]){
          arr[i].next = arr[i+1]
      } else {
          arr[i].next = null
      }
  }
  return arr[0]
};

function main(){
let n6 = new ListNode(6, null)
let n5 = new ListNode(5, n6)
let n4 = new ListNode(4, n5)
let n3 = new ListNode(3, n4)
let n2 = new ListNode(2, n3)
let n1 = new ListNode(1, n2)
let r = swapNodes(n1, 6)
while(r){
    console.log(r)
   r = r.next
}
}
main()