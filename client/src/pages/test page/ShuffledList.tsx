import { useAppSelector } from 'hooks/storeHooks'
import WordField from './WordField'

export interface DraggableWordProps {
	draggableWord: string | null
	setUsedWords: React.Dispatch<React.SetStateAction<string[]>>
}

const ShuffledList = (props: DraggableWordProps) => {
	const { shuffled } = useAppSelector((store) => store.words)
	return (
		<div className='grid grid-cols-2 gap-4 w-1/2 min-w-fit m-auto my-5 text-justify'>
			{shuffled.map(({ english }) => (
				<div className='flex items-center mb-0.5' key={`s${english}`}>
					<div className='py-1 px-3 text-white text-xl bg-slate-600 rounded-md'>
						{english}
					</div>
					<p className='text-xl text-white font-bold mx-3'>-</p>
					<WordField {...props} />
				</div>
			))}
		</div>
	)
}

export default ShuffledList
