/**

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。


示例 1：


输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

示例 2：

输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
 

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 要解这道题之前 先要知道二叉搜索树的概念
 *  二叉搜索树又被称为二叉排序树，那么它本身也是一棵二叉树，那么满足以下性质的二叉树就是二叉搜索树：
 *    - 若左子树不为空，则左子树上左右节点的值都小于根节点的值
 *    - 若它的右子树不为空，则它的右子树上所有的节点的值都大于根节点的值
 *    - 它的左右子树也要分别是二叉搜索树
 *
 *  总结：二叉搜索树 根节点的左边一定左子树一定小于根，根节点的右子树一定大于根
 *        且子节点也要时二叉搜索树
 *
 *  解题思路：
 *    这题的解法非常之巧妙，在我们已经知道了 二叉搜索树的概念 的概念之后，由于题目要求高度平衡
 *     所以二叉搜索树的根节点一定是数组的最中间的元素 只有这样才能报纸最终绝的 绝对平衡二叉树
 *
 *     找到根之后，根左在 数组中间元素炒拆分之后的左侧子数组的最中间元素（如果没有中间的元素就取中间的最内偏左（偏右）元素）
 *                根右在 数组中间元素炒拆分之后的右侧子数组的最中间元素（如果没有中间的元素就取中间的最内偏左（偏右）元素）
 *        子根节点继续按照这样这个操作进行下去 直到找不到元素了为止
 *
 *    这题的解法是看大神的解法的  非常的棒 思路也很容易理解
 *
 *    当给的数组是 [-10,-3,0,5,9] 表示的其实是 一个二叉树的中序遍历的结果是 [-10,-3,0,5,9]
 *      就能大致的推出这个二叉树的形状了
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return help(nums, 0, nums.length - 1);
};
function help(nums, i, j) {
  if (i > j) {
    return null;
  }
  let center = parseInt((i + j) / 2);
  let Node = new TreeNode(nums[center]);
  Node.left = help(nums, i, center - 1);
  Node.right = help(nums, center + 1, j);
  return Node;
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
