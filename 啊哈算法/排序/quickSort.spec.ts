import { quickSort } from './快速排序'

describe('>>> 快速排序', () => {
	it('base test', () => {
		expect(quickSort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8])).toStrictEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		])
	})
})

export {}
