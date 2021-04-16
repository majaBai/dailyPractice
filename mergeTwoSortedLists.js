/*
Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 == null || l2 == null) return l1? l1 : l2
    let res = new ListNode()
    let temp = res
    while(l1 && l2){
        if(l1.val < l2.val){
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }

    if(l1){
        temp.next = l1
    }
    if(l2){
        temp.next = l2
    }
    return res.next
};