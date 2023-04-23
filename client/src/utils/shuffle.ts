import { Word } from 'types/word'

export default function shuffle(array: Word[]) {
	const arr = JSON.parse(JSON.stringify(array))
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		let temp = arr[i].russian
		arr[i].russian = arr[j].russian
		arr[j].russian = temp
	}
	return arr
}
