import { useAppSelector } from 'hooks/storeHooks'
import { useState } from 'react'
import ShuffledList from './ShuffledList'

export default function Test() {
	const { shuffled } = useAppSelector((store) => store.words)

	const [draggableWord, setDraggableWord] = useState<string | null>(null)
	const [usedWords, setUsedWords] = useState<string[]>([])

	return (
		<div>
			<ShuffledList draggableWord={draggableWord} setUsedWords={setUsedWords} />
			<hr className='w-3/4 m-auto my-3' />
			<div className='w-2/3 m-auto text-justify'>
				{shuffled
					.filter(({ russian }) => !usedWords.includes(russian))
					.map((word) => (
						<div
							key={`w${word.russian}`}
							draggable
							className={`inline-block text-xl text-white m-2 py-1.5 px-4 bg-slate-600 rounded-lg cursor-grab transition duration-200 hover:scale-105 select-none ${
								draggableWord === word.russian ? 'opacity-50' : ''
							}`}
							onDragStart={() => setDraggableWord(word.russian)}
							onDragEnd={() => setDraggableWord(null)}
						>
							{word.russian}
						</div>
					))}
			</div>
		</div>
	)
}
