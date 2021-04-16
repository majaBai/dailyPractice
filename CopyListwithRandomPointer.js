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

function solution2(head){
    if(head === null) return head
    let map = new Map()

    let cur = head
    while(cur){
        map.set(cur,new Node(cur.val, null, null))
        cur = cur.next
    }
    
    console.log(map)
    cur = head
    while(cur){
        map.get(cur).next = map.get(cur.next)
        map.get(cur).random = map.get(cur.random)
        cur = cur.next
    }

    return map.get(head)
}



function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
}

function main(){
    let n2 = new Node(2, null, null)
    let n1 = new Node(1, n2, n2)

    let res = solution2(n1)
    console.log(res)
}
main()