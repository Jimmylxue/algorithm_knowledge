/**
 * 实现如下功能：
 *  LazyMan('jimmy')
 *  // hello, my name is jimmy
 *
 *  LazyMan('jimmy').sleep(10).eat('dinner)
 *  // hello, my name is jimmy
 *  等待10s...
 *  // wake up after 10s
 *  // eat dinner...
 *
 *  LazyMan('jimmy').eat('dinner').eat('supper')
 *  // hello, my name is jimmy
 *  // eat dinner...
 *  // eat supper...
 *
 *  LazyMan('jimmy').sleepFirst(5).eat('dinner')
 *  等待5s
 *  // wake up after 5s
 *  // hello, my name is jimmy
 *  // eat dinner...
 * 
 * lazyman 函数
 * 返回的是一个对象
 * 支持链式调用
 * setTimeout(() => {
	
 }, timeout);
 	队列的问题

	维护一个队列， 当如果是 eat sleep sleepFirst() 直接往队尾插入元素  sleepFirst 往队首插入元素

	我们要什么时候 去 将队列中的元素 进行 出队 =》 所有的链式调用都调用完毕的时候
	
	我们应该怎样去判断 这个链式调用已经全部调用完毕了？？？？？ =》 主线程的代码全部执行结束之后 就可以去执行出队操作
 */

class LazyManGenerator {
	taskList = []

	constructor(name) {
		const task = () => {
			console.log('hello, my name is ', name)
			this.next()
		}
		this.taskList.push(task)

		setTimeout(() => {
			// 异步的代码  当执行到这里的时候  主线程 肯定是全部执行结束了
			this.next()
		}, 0)
	}

	// 通知下一个队员执行函数
	next() {
		const task = this.taskList.shift()
		task?.()
	}

	sleep(time) {
		const task = () => {
			setTimeout(() => {
				console.log(`wake up after ${time}s`)
				this.next()
			}, time * 1000)
		}
		this.taskList.push(task)
		return this
	}

	sleepFirst(time) {
		const task = () => {
			setTimeout(() => {
				console.log(`wake up after ${time}s`)
				this.next()
			}, time * 1000)
		}
		this.taskList.unshift(task)
		return this
	}

	eat(food) {
		const task = () => {
			console.log('eat ', food)
			this.next()
		}
		this.taskList.push(task)
		return this
	}
}

function LazyMan(name) {
	return new LazyManGenerator(name)
}

LazyMan('jimmy').sleepFirst(5).eat('dinner')
