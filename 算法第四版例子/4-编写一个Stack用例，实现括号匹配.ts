{
  /**
   * 这种匹配括号 使用 栈 的方式可以很容易的写出来
   * 思路：
   *  遍历括号字符串，当栈为空时，将当前遍历的这个括号入栈
   *  当栈不为空时  将栈顶和当前遍历到的这个括号进行匹配
   *    如果能组成括号 则将栈顶元素弹出
   *    如果不能组成括号 则将当前遍历到的这个元素入栈
   *
   *  最终字符串遍历完成之后
   *    判断栈内还是否存有元素
   *      如果是空栈，说明括号匹配成功
   *      如果栈内还有元素  说明括号匹配不成功
   */

  class Stack<T> {
    private storage: T[] = [];
    private N: number = 0;
    // private MaxSize:number = 0
    // TS 语法糖 可以直接在构造函数的形参中写变量 会自动赋值
    constructor(private MaxSize) {}

    public size(): number {
      return this.N;
    }

    public isFull(): boolean {
      return this.N === this.MaxSize;
    }

    public isEmpty(): boolean {
      return this.N === 0;
    }

    public push(cap: T): boolean {
      if (this.N < this.MaxSize) {
        this.storage[this.N++] = cap;
        return true;
      }
      return false;
    }

    public pop(): T {
      return this.storage[--this.N];
    }

    public value(): T {
      // 获取栈顶元素
      let index = this.N;
      return this.storage[--index];
    }
  }

  /**
   * ts 非常方便的可以使用枚举类型
   */
  enum brackets {
    '(' = 1,
    ')' = -1,
    '[' = 2,
    ']' = -2,
    '{' = 3,
    '}' = -3,
  }

  function checkBrackets(str: string): boolean {
    let stack = new Stack<String>(30);
    for (let i = 0; i < str.length; i++) {
      if (stack.isEmpty()) {
        stack.push(str[i]);
      } else {
        if (isCheck(stack.value() as string, str[i])) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
      }
    }
    return stack.isEmpty();
  }

  function isCheck(str1: string, str2: string) {
    if (brackets[str1] === 1 && brackets[str2] === -1) {
      return true;
    } else if (brackets[str1] === 2 && brackets[str2] === -2) {
      return true;
    } else if (brackets[str1] === 3 && brackets[str2] === -3) {
      return true;
    } else {
      return false;
    }
  }

  // console.log(checkBrackets('[][](){}')); // true
  // console.log(checkBrackets('[()]{}{[()()]()}')); // true
  console.log(checkBrackets('[()]{}{[()()]()]')); // false
  // console.log()
}
