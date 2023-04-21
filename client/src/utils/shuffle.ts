import { Word } from 'types/word'

export default function shuffle(array: Word[]) {
	const arr = [...array]
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	return arr
}