import { fetchWords, fetchNewest } from 'redux/features/wordsSlice'
import { WordInput } from './WordInput'
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import Loader from 'components/Loader'

const buttonStyle =
	'mt-2 bg-blue-600 rounded-md py-[3px] px-5 text-white text-xl font-medium hover:bg-blue-700 transition duration-200'

export default function Words() {
	const dispatch = useAppDispatch()
	const { words, loading } = useAppSelector((store) => store.words)

	return (
		<div className='relative w-[700px] m-auto mt-10 rounded-md py-5 px-8 bg-slate-600'>
			{loading && <Loader />}
			{words.map((word) => (
				<WordInput {...word} key={JSON.stringify(word)} />
			))}
			<hr className='mt-3 mb-2' />
			<div className='flex justify-between'>
				<button className={buttonStyle} onClick={() => {}}>
					Do test
				</button>
				<div className='flex'>
					<button
						className={`${buttonStyle} mr-2`}
						onClick={() => dispatch(fetchWords(15))}
					>
						Random
					</button>
					<button
						className={`${buttonStyle} ml-1`}
						onClick={() => dispatch(fetchNewest(15))}
					>
						Newest
					</button>
				</div>
			</div>
		</div>
	)
}
