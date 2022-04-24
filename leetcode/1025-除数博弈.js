/**

爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。

 

示例 1：

输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
示例 2：

输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
 

提示：

1 <= N <= 1000

 */

/**
 * 
  正常的逻辑如果全部都是随机的 就使用随机数进行判断 那么谁都有可能会赢（就按照执行次数就可以判断谁赢）
    如果按照题目那样 以最佳状态 就是尽可能的多玩 所以就是按照 每次都只拿1 就是说占到最后一个1的输，最后一个是2的就赢

    这是道数学题~
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  let start = n;
  let randon; // 获取随机数
  let count = 0;
  todo();

  function todo() {
    randon = Math.floor(Math.random() * (start - 1)) + 1;
    if (start === 1 && randon === 1) {
      return;
    }
    if (randon >= 0 && start % randon === 0) {
      // 符合条件 继续往下走
      console.log("符合", randon);
      start = start - randon;
      count++;
      todo();
    } else {
      console.log("不符合", randon);
    }
  }
  console.log("执行次数", count);
  if (count % 2 === 0) {
    // 偶数
    return false;
  } else {
    return true;
  }
};

console.log(divisorGame(4));
