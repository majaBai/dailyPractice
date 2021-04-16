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
var reverseList = function(head) {
    if(head == null || head.next == null) return head
    let second = head.next
    let rest = reverseList(second)
    second.next = head
    head.next = null
    return rest
};

function solution2(head){
    let reversed = null
    while(head){
        let nxt = head.next
        head.next = reversed
        reversed = head
        head = nxt
    }
    return reversed
}