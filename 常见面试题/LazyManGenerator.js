/**
 * 实现如下功能：
 *  LazyMan('jimmy')
 *  // hello, my name is jimmy
 *
 *  LazyMan('jimmy').sleep(10).eat('dinner)
 *  // hello, my name is jimmy
 *  // 等待10s...
 *  // wake up after 10s
 *  // eat dinner...
 *
 *  LazyMan('jimmy').eat('dinner').eat('supper')
 *  // hello, my name is jimmy
 *  // eat dinner...
 *  // eat supper...
 *
 *  LazyMan('jimmy').sleepFirst(5).eat('dinner')
 *  // 等待5s
 *  // wake up after 5s
 *  // hello, my name is jimmy
 *  // eat dinner...
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
			this.next()
		}, 0)
	}

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
