/*

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。


示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000

*/

/**
 * 这一题和第104题是一样的  只不过一个求的是最大的 一个求的是最小的
 *
 *  解题思路也比较清晰 通过递归的方式获取二叉树左边的做小深度 和右边的最小深度
 *  最后比较一下 取更小的那个即可
 *
 *  但是有一个细节：
 *    如果二叉树是 一条线的二叉树（没有左子树或没有右字子树）那么它的最小深度不是0而是对应有子树那边的深度
 *
 *  其他的都是一样的  递归就行
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
