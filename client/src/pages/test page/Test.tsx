import { useAppSelector } from 'hooks/storeHooks'
import { useState } from 'react'
import { Word } from 'types/word'
import WordField from './WordField'
import DraggableWord from './DraggableWord'
import Loader from 'components/Loader'

export default function Test() {
	const { loading, shuffled } = useAppSelector((store) => store.words)

	const [dragging, setDragging] = useState<string | null>(null)
	const [usedWords, setUsedWords] = useState<string[]>([])
	const [showResults, setShowResults] = useState(false)
	const unUsedWords = shuffled.filter((word) => !usedWords.includes(word.russian))
	// const unUsedWords: Word[] = []

	return loading ? (
		<Loader />
	) : (
		<div>
			<div className='grid grid-cols-2 gap-4 w-1/2 min-w-fit m-auto my-5 text-justify'>
				{shuffled.map((word) => (
					<WordField
						{...word}
						showResults={showResults}
						draggableWord={dragging}
						setUsedWords={setUsedWords}
					/>
				))}
			</div>

			<hr className='w-3/4 m-auto my-3' />

			<div className='w-2/3 m-auto text-justify'>
				{!!unUsedWords.length ? (
					unUsedWords.map((word) => (
						<DraggableWord {...word} dragging={dragging} setDragging={setDragging} />
					))
				) : (
					<button
						className='block m-auto bg-blue-500 text-white font-semibold py-2 px-7 rounded-md transition duration-200 hover:bg-blue-600'
						onClick={() => setShowResults(true)}
					>
						Submit
					</button>
				)}
			</div>
		</div>
	)
}
