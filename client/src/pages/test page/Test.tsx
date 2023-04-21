import { useAppSelector } from 'hooks/storeHooks'
import { Word } from 'types/word'
import shuffle from 'utils/shuffle'

const blockStyle =
	'inline-block text-xl text-white m-2 py-1.5 px-4 bg-slate-600 rounded-lg cursor-pointer transition duration-200 hover:scale-105 select-none'

const ShuffledList = ({ array }: { array: Word[] }) => (
	<div className='w-1/2 m-auto'>
		{shuffle(array).map(({ english }) => (
			<div className='flex items-center m-3' key={`s${english}`}>
				<div className='w-fit py-1 px-3 text-white text-xl bg-slate-600 rounded-md'>
					{english}
				</div>
				<p className='text-xl text-white font-bold mx-3'>-</p>
				<div className='w-40 h-9 rounded-md bg-gray-500'></div>
			</div>
		))}
	</div>
)

const DraggableWord = (word: Word) => {
	return (
		<div
			key={`w${word.russian}`}
			className={
				'inline-block text-xl text-white m-2 py-1.5 px-4 bg-slate-600 rounded-lg cursor-pointer transition duration-200 hover:scale-105 select-none'
			}
			draggable
		>
			{word.russian}
		</div>
	)
}

export default function Test() {
	const { words } = useAppSelector((store) => store.words)
	return (
		<div>
			<div className='flex w-7/12 min-w-fit items-center justify-around m-auto my-3'>
				<ShuffledList array={words.slice(0, 7)} />
				<ShuffledList array={words.slice(7)} />
			</div>

			<hr className='w-3/4 m-auto my-3' />
			<div className='w-2/3 m-auto text-justify'>
				{shuffle(words).map((word) => (
					<DraggableWord {...word} />
				))}
			</div>
		</div>
	)
}
