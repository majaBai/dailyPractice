/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head
    let temp = []
    let cur = head
    while(cur != null){
        next = cur.next
        cur.next = null
        if(temp.length === 0 || cur.val != temp[temp.length - 1].val) temp.push(cur)
        cur = next
    }
    for( let i = 0; i< temp.length -1; i++ ){
        temp[i].next = temp[i+1]
    }
    return temp[0]
};

function solution2(head){
    if(head === null || head.next === null) return head
    let prev = head
    let cur = head.next
    while(cur){
        if(cur.val === prev.val){
            cur = cur.next
        } else {
            prev.next = cur
            prev = prev.next
            cur = cur.next
        }
    }
    prev.next = null
    return head
}