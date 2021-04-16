/*
Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105

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
var sortList = function(head) {
    if(head == null || head.next == null) return head
    let temp = []
    while(head){
        let nxt = head.next
        head.next = null
        temp.push(head)
        head = nxt
    }

    temp.sort((a, b) => a.val - b.val)

    for(let i = 0; i<temp.length-1; i++){
        temp[i].next = temp[i+1]
    }
    return temp[0]
};

