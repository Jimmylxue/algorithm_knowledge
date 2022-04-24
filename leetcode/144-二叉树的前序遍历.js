/**

给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,2,3]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[1,2]
示例 5：


输入：root = [1,null,2]
输出：[1,2]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100

 */

/**
 * 二叉树遍历解题过程
 *  其实先序遍历 中序遍历 后序遍历代码都是一样的  二叉树的问题基本都是通过递归来进行解题的  
 *  二叉树的遍历的代码其实可以和冒泡排序差不多通过背下来的 多写几遍就记住了  
 *  最关键的就是 res.push(root.val); 的位置  放在最前面就是先序遍历 放在中间就能是中序遍历的结果
 *  res.push(root.val);
    inOrder(root.left);
    inOrder(root.right);
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  const inOrder = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    inOrder(root.left);
    inOrder(root.right);
  };
  inOrder(root);
  return res;
};
