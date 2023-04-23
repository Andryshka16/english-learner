import { useState } from 'react'
import { Word } from 'types/word'
import { AiFillCheckCircle } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

type WordFieldProps = Word & {
	showResults: boolean
	draggableWord: string | null
	setUsedWords: React.Dispatch<React.SetStateAction<string[]>>
}

const WordField = ({
	russian,
	english,
	showResults,
	draggableWord,
	setUsedWords,
}: WordFieldProps) => {
	const [word, setWord] = useState<string | null>(null)

	return (
		<div className='flex items-center mb-0.5' key={`s${english}`}>
			<div className='py-1 px-3 text-white text-xl bg-slate-600 rounded-md'>{english}</div>
			<p className='text-xl text-white font-bold mx-3'>-</p>
			{word ? (
				<div className='py-1 px-3 mr-2 text-white text-xl bg-slate-600 rounded-md'>
					{word}
				</div>
			) : (
				<div
					className='w-40 h-9 mr-2 rounded-md bg-gray-500 transition duration-200'
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
						if (draggableWord) {
							setUsedWords((prev) => [...prev, draggableWord])
						}
					}}
				></div>
			)}
			{showResults &&
				(word === russian ? <AiFillCheckCircle color='green' /> : <GiCancel color='red' />)}
		</div>
	)
}

export default WordField
