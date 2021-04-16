/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head == null) return head
    let cur = head

    // 复制节点，紧挨到到后面
    // 1->2->3  ==>  1->1'->2->2'->3->3'
    while(cur){
        let clone = new Node(cur.val, cur.next)
        let temp = cur.next
        cur.next = clone
        cur = temp
    }

    // 处理 random 指针
    cur = head
    while(cur){
        if(cur.random){
            cur.next.random = cur.random.next
        }
        cur = cur.next.next
    }

    // 分离两个链表, 处理 next 指针
    cur = head
    cloneHead = cur.next
    while(cur != null && cur.next != null){
        temp = cur.next
        cur.next = cur.next.next
        cur = temp
    }
    return cloneHead
};



function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
}

function main(){
    let n2 = new Node(2, null, null)
    let n1 = new Node(1, n2, n2)

    let res = copyRandomList(n1)
    console.log(res)
}
main()