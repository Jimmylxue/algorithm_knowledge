/**
 * 使用泛型  实现多类型抽象栈
 */

class FixedCapacityStackOfString<T> {
  private str: T[] = [];
  private N: number = 0;
  private MaxSize: number = 0; //  这个不同 因为 js的数组大小是动态的
  constructor(number) {
    this.MaxSize = number;
  }
  public size(): number {
    // 返回栈的大小
    return this.N;
  }
  public isEmpty(): boolean {
    return this.N === 0;
  }

  public push(cap: T): boolean {
    console.log('???', this.N, this.MaxSize);
    if (this.N < this.MaxSize) {
      this.str[this.N++] = cap;
      return true;
    } else {
      return false;
    }
  }

  public pop(): T {
    return this.str[--this.N];
  }
}

let s = new FixedCapacityStackOfString<String>(3);
s.push('Jimmy');
s.push('xuexue');
s.push('Jack');
s.push('Lin');
console.log('size', s.size());
console.log(s.pop()); // Jack
console.log(s.pop()); // xuexue
console.log(s.pop()); // Jimmy
