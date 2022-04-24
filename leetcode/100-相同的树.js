/*

给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

 

示例 1：


输入：p = [1,2,3], q = [1,2,3]
输出：true
示例 2：


输入：p = [1,2], q = [1,null,2]
输出：false
示例 3：


输入：p = [1,2,1], q = [1,1,2]
输出：false
 

提示：

两棵树上的节点数目都在范围 [0, 100] 内
-104 <= Node.val <= 104

*/

/**
 * 解题思路：
 *  这题我使用的是暴力破解法
 *  和遍历二叉树的方法类似 定义一个  inorder  递归方法
 *    在递归方法中判断 只要递归到的节点 的 val相同 就按照顺序 从左节点开始遍历 再进入右节点开始遍历
 *    总之总体的方向是 尽量往二叉树的左下角走
 *    
 *    一旦出现 两个节点的 val 不同时  或者 两个节点有一个节点是 null时， 这时候就说明两个二叉树不相同
 *    相反 如果两个二叉树的遍历结束了 它们还没有找到一个不同 说明这两个二叉树是同一个二叉树
 * 
 *    
 *  最终 leetcode 结果还不错
 *    执行用时：76 ms, 在所有 JavaScript 提交中击败了33.69%的用户
      内存消耗：38.8 MB, 在所有 JavaScript 提交中击败了79.24%的用户
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let flag = true;
  const inorder = (root1, root2) => {
    if ((root1 && !root2) || (!root1 && root2)) {
      flag = false;
      return;
    } else if (!root1 && !root2) {
      return;
    }
    if (root1.val !== root2.val) {
      flag = false;
    } else {
      inorder(root1.left, root2.left);
      inorder(root1.right, root2.right);
    }
  };
  inorder(p, q);
  return flag;
};
