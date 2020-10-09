/*
Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.

*/

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(m === n || head == null || head.next == null) return head
    let step = 1, cur = head
    let beforeM = null
    while(step < m){
      if(step == m-1){
        beforeM = cur
        break
      }
      cur = cur.next
      step++
    }
    let newH = reverseList(beforeM, head, n - m)
    return newH
};

function reverseList(beforehead, oldHead, step){
  let head, afterEnd, headp
  if(beforehead === null){
    head = afterEnd = headp = oldHead
  } else {
   head = afterEnd = headp =  beforehead.next
  }
  let ordered = null
  while(step >= 0){
    afterEnd = afterEnd.next
    let nxt = head.next
    head.next = ordered
    ordered = head
    head = nxt
    step--
  }
  beforehead === null? oldHead= ordered : beforehead.next = ordered
  headp.next = afterEnd

  return oldHead
}