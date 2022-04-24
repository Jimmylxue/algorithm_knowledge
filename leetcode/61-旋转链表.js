/**

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
示例 2：

输入：head = [0,1,2], k = 4
输出：[2,0,1]

 */

/**
 * 解题思路：
 *  链表的题目对我来说算是非常恶心的题型，不是会做，而是不会写......
 *  比如这题，思路出来了以后写了很久，最终还是参考了大神的解题思路才写出来
 * 	这题的思路也是相对比较清晰，先将这个链表的头尾进行链接，形成一个环形链表
 * 	然后将移动k个位置的节点作为头节点，往后移动链表长度之后那个位置截断头尾的连接，
 * 	最后再将这个新的链表进行返回，
 *
 * 	创建环形链表相对比较简单，很快就能写好，所以比较难的是 环形链表的截断，这个写了好久.....
 *
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head) {
		return null
	}
	let current = head
	let length = 0
	while (current) {
		length++
		if (!current.next) {
			current.next = head
			break
		}
		current = current.next
	}
	let temp = null
	let left = k % length
	while (left++ < length) {
		if (left === length) {
			temp = head
		}
		head = head.next
	}
	temp.next = null
	return head
}
