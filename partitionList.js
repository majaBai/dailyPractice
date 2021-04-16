/*
Given the head of a linked list and a value x, partition it such that 
all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Constraints:

The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head === null || head.next == null) return head
    let lessVal = []
    let greaterVal = []
    while(head){
        let nxt = head.next
        if(head.val < x){
            lessVal.push(head)
        } else {
            greaterVal.push(head)
        }
        head.next = null
        head = nxt
    }

    for(let i = 0; i<lessVal.length-1; i++){
        lessVal[i].next = lessVal[i+1]
    }
    for(let i = 0; i<greaterVal.length-1; i++){
        greaterVal[i].next = greaterVal[i+1]
    }
    if(lessVal.length && greaterVal.length) lessVal[lessVal.length-1].next = greaterVal[0]

    return lessVal.length? lessVal[0] : greaterVal[0]
};