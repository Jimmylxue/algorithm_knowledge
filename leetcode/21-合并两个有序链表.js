/*
  合并两个有序链表

  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

  示例 1：
    输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]

  示例 2：
    输入：l1 = [], l2 = []
    输出：[]

  示例 3：
    输入：l1 = [], l2 = [0]
    输出：[0]

  提示：

    两个链表的节点数目范围是 [0, 50]
    -100 <= Node.val <= 100
    l1 和 l2 均按 非递减顺序 排列
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
  链表的内容我是真的很菜，这个指针一直处理的不好，所以这道题是我看了大佬解题的结果直接搬过来的，不过在一番研究下终于是理解了大佬的思路
    如： l1 = [1,2,4] l2 = [1,3,4]
    先创建一个的链表 dummy 第一个值为0 再将dummy复制一份为curr
      判断 l1 和 l2的第一个值 curr 的next指向更小的那个链表 指向之后将被指向的链表指针向后挪动一格，
      编程 dummy = [0,1,2,4]  l1 = [2,4] l2 = [1,3,4]
    再次执行
      dummy = [0,1,1,3,4] l1 = [2,4] l2 = [3,4]
    再次执行
      dummy = [0,1,1,2,4] l1 = [3] l2 = [3,4]
    ....
      dummy = [0,1,1,2,3,3,4]
    
    最后输出 dummy.next 就是结果

  非常的巧妙 我的思想还是一直被局限在了数组里，所以一直想的是创建个空的 然后一个个比较再添加进去， 但是实际上我写不出来 并且如果写出来了 代码的很复杂 没有大佬写的好
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	let dummy = new ListNode(),
		curr = dummy
	while (l1 !== null && l2 !== null) {
		if (l1.val < l2.val) {
			curr.next = l1
			l1 = l1.next
		} else {
			curr.next = l2
			l2 = l2.next
		}
		curr = curr.next
	}
	if (l1 !== null) {
		curr.next = l1
	}
	if (l2 !== null) {
		curr.next = l2
	}
	return dummy.next
}
