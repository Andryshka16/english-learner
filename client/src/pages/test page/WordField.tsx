import { useState } from 'react'
import { Word } from 'types/word'

type WordFieldProps = Word & {
	showResults: boolean
	draggableWord: string | null
	setUnUsedWords: React.Dispatch<React.SetStateAction<Word[]>>
}

const WordField = ({ showResults, draggableWord, setUnUsedWords, ...word }: WordFieldProps) => {
	const [inserted, setInserted] = useState<string | null>(null)

	const correctColor =
		'bg-opacity-60 ' + (inserted === word.russian ? 'bg-green-500' : 'bg-red-500')

	return (
		<div className='flex items-center mb-0.5'>
			<div className='py-1 px-3 text-white text-xl bg-slate-600 rounded-md'>
				{word.english}
			</div>
			<p className='text-xl text-white font-bold mx-3'>-</p>
			{inserted ? (
				<div
					className={`py-1 px-3 text-white text-xl rounded-md transition duration-200 ${
						showResults ? correctColor : 'bg-slate-600'
					}`}
				>
					{inserted}
				</div>
			) : (
				<div
					className={`w-40 h-9 rounded-md transition duration-200 ${
						showResults ? correctColor : 'bg-slate-600'
					}`}
					onDragOver={(e) => {
						e.preventDefault()
						e.currentTarget.classList.add('scale-95')
					}}
					onDragLeave={(e) => {
						e.currentTarget.classList.remove('scale-95')
					}}
					onDrop={(e) => {
						e.preventDefault()
						setInserted(draggableWord)
						if (draggableWord) {
							setUnUsedWords((prev) =>
								prev.filter(({ russian }) => russian !== draggableWord)
							)
						}
					}}
				></div>
			)}
		</div>
	)
}

export default WordField
