/*
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
  进阶：你能尝试使用一趟扫描实现吗？

  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]

  输入：head = [1], n = 1
  输出：[]

  输入：head = [1,2], n = 1
  输出：[1]

  提示：

  链表中结点的数目为 sz
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  /* 
    这里复习了链表的知识,单向链表每个节点分别有存储有两个数据,分别是这个节点的值 以及节点指向的下一个节点  这样就串成一个链表
  */
  let temp = new ListNode(-1,head) // 创建一个新链表 新链表的第一个节点值是-1 next 指向的是老链表 新链表的next就等于老链表
    let otherList = temp
    let length = 0
    // 这个for循环主要是为了获取到这个链表的长度
    for(let i = 0;;i++){
        if(!head.next){
            length = i+1
            break
        }else{
            head = head.next
            // 这里的 head.next 每执行一次 指针都向后挪动一次  是没有办法复原的
        }
    }

    // 第二次循环是为了把指针定位到 要删除的节点的前一个节点
    for(let i = 0;i<length-n;i++){
        otherList = otherList.next
    }
    otherList.next = otherList.next.next // 前一个节点的next指向下下一个节点 那么这个节点就成功被删除了
    return temp.next // 定义的链表的next就是最终的节点
};

console.log(removeNthFromEnd([1,2,3,4,5],2))