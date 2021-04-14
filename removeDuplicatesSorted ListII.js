/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. 
Return the linked list sorted as well.

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

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
    if(head === null || head.next == null) return head
    let dummy = new ListNode(-1, head)
    let prev = dummy, cur =head
    while(cur){
        if(cur.next != null && cur.next.val == cur.val){
            let next = findNext(cur)
            prev.next = next
            cur = next
        } else {
            prev = cur
            cur = cur.next
        }
    }
    return dummy.next
};

function findNext(node){
    while(node.next && node.val === node.next.val){
        node = node.next
    }
    return node.next
}