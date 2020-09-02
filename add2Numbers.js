/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val, next){
  this.val = (val === undefined? 0: val)
  this.next = (next===undefined? null:next)
}


/**
 * @param {ListNode} l1, l2
 * @return {ListNode}
*/
const addTwoNumbers = function(l1, l2){
  let head1 = l1, head2 = l2
  let reminder = 0
  let newhead = new ListNode(-1)
  let r = newhead
  while(head1 != null || head2 != null || reminder>0){
    let sum = (head1==null? 0: head1.val) + (head2 == null? 0: head2.val) + reminder
    let n = new ListNode(sum % 10)
    r.next = n

    reminder = parseInt(sum/10)
    r = r.next
    head1 = head1==null? null : head1.next
    head2 = head2 == null? null: head2.next
  }
  return newhead.next
}

function main(){
 let l3 = new ListNode(6)
 let l2 = new ListNode(4, l3)
 let l1 = new ListNode(2, l2)

 
 let n3 = new ListNode(4)
 let n2 = new ListNode(6, n3)
 let n1 = new ListNode(5, n2)

 let r = addTwoNumbers(l1, n1)

 while(r !== null){
   console.log("r", r.val)
   r = r.next
 }

}

main()