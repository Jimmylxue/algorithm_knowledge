/**
 * 上个栈的例子是使用 数组实现的
 *  这个例子使用链表实现 栈
 */
{
  class Nodee<T> {
    public item: T;
    public next: Nodee<T>;
  }

  class Stack<T> {
    private first: Nodee<T>; // 栈顶元素
    private N: number = 0; // 栈的数量
    constructor() {}
    public isEmpty(): boolean {
      return this.N === 0;
    }
    public push(item: T): void {
      let oldNode = this.first;
      this.first = new Nodee();
      this.first.item = item;
      this.first.next = oldNode;
      this.N++;
    }
    public pop(): T {
      let itenm = this.first.item;
      this.first = this.first.next;
      this.N--;
      return itenm;
    }
    public size(): number {
      return this.N;
    }
  }

  const Jimmy = new Stack<String>();
  Jimmy.push('hello');
  Jimmy.push('world');
  // Jimmy.push(22); // 使用泛型 放多类型使用
  console.log(Jimmy.size()); //2
  console.log(Jimmy.pop()); //world
  console.log(Jimmy.pop()); //hello
  console.log(Jimmy.isEmpty()); // true
}
