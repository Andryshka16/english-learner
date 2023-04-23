import { useAppSelector } from 'hooks/storeHooks'
import { useEffect, useState } from 'react'
import { Word } from 'types/word'
import WordField from './WordField'
import DraggableWord from './DraggableWord'
import Loader from 'components/Loader'
import shuffle from 'utils/shuffle'

export default function Test() {
	const { words, loading } = useAppSelector((store) => store.words)

	const [dragging, setDragging] = useState<string | null>(null)
	const [showResults, setShowResults] = useState(false)

	const [wordFields, setWordFields] = useState<Word[]>(shuffle(words))
	const [unUsedWords, setUnUsedWords] = useState<Word[]>(shuffle(words))

	useEffect(() => {
		setWordFields(shuffle(words))
		setUnUsedWords(shuffle(words))
	}, [loading])

	return loading ? (
		<Loader />
	) : (
		<div>
			<div className='grid grid-cols-2 gap-4 w-1/2 min-w-fit m-auto my-5 text-justify'>
				{wordFields.map((word) => (
					<WordField
						{...word}
						key={`w${word.russian}`}
						showResults={showResults}
						draggableWord={dragging}
						setUnUsedWords={setUnUsedWords}
					/>
				))}
			</div>

			<hr className='w-3/4 m-auto my-3' />

			<div className='w-2/3 m-auto text-justify'>
				{unUsedWords.map((word) => (
					<DraggableWord
						{...word}
						key={`d${word.english}`}
						dragging={dragging}
						setDragging={setDragging}
					/>
				))}
				<div className='flex w-fit m-auto'>
					<button
						className='m-3 text-white font-semibold py-2 px-7 rounded-md transition duration-200 bg-blue-500 hover:bg-blue-600'
						onClick={() => setShowResults(true)}
					>
						Submit
					</button>
					<button
						className='m-3 text-white font-semibold py-2 px-7 rounded-md transition duration-200 bg-blue-500 hover:bg-blue-600'
						onClick={() => {
							setShowResults(false)
							setDragging(null)
							setWordFields(shuffle(words))
							setUnUsedWords(shuffle(words))
						}}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	)
}
