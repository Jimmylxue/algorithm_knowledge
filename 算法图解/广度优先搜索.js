/**
 * 广度优先搜索 -- 图、哈希表、数组（队列）
 *  广度优先搜索解决的问题是：
 *    - 是否含有A到B的路径
 *    - 如果有，广度优先搜索将找出最短的路径
 *
 *  广度优先搜索思路：
 *    先搜索第一层关系的数据，判断是否有符合条件的人选
 *    一个个判断，如果符合条件，则跳出
 *              如果不符合条件，则将这个不符合条件的 关联的数据（二级）数据 加入到搜索对列中
 */

const map = {
	you: ['yongjie', 'zhengchao', 'jingtao', 'jiangyong', 'youshan'],
	yongjie: ['xiaoA', 'xiaoB', 'xiaoC'],
	jingtao: ['xiaoD', 'xiaoE', 'xiaoF', 'xiaoG'],
	zhengchao: ['xiaoH'],
	youshan: ['xiaoE', 'xiaoA', 'xiaoG'],
	jiangyong: [],
}

const BFS = name => {
	const searchQueue = []
	searchQueue.push(...map[name])
	const searched = []
	let num = 0
	while (searchQueue.length > 0) {
		const person = searchQueue.shift() // 出队
		num++
		console.log(person, 'person')
		if (person === 'xiaoG') {
			console.log('找到了！！！', num)
			return true
		}
		searchQueue.push(...(map[person] || []))
		searched.push(person)
	}
	return false
}

BFS('you')
