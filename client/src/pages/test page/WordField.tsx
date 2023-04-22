import { useState } from 'react'
import { DraggableWordProps } from './ShuffledList'

const WordField = ({ draggableWord, setUsedWords }: DraggableWordProps) => {
	const [word, setWord] = useState<string | null>(null)

	return word ? (
		<div className='py-1 px-3 text-white text-xl bg-slate-600 rounded-md'>{word}</div>
	) : (
		<div
			className='w-40 h-9 rounded-md bg-gray-500 transition duration-200'
			onDragOver={(e) => {
				e.preventDefault()
				e.currentTarget.classList.add('scale-95')
			}}
			onDragLeave={(e) => {
				e.currentTarget.classList.remove('scale-95')
			}}
			onDrop={(e) => {
				e.preventDefault()
				setWord(draggableWord)
				if (draggableWord) setUsedWords((prev) => [...prev, draggableWord])
			}}
		></div>
	)
}

export default WordField
