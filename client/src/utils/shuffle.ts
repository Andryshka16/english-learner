import { Word } from 'types/word'

export default function shuffle(array: Word[]) {
	array = JSON.parse(JSON.stringify(array))
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}
