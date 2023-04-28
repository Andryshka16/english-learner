import { fetchWords, fetchNewest } from 'redux/features/wordsSlice'
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { NavLink } from 'react-router-dom'
import WordInput from './WordInput'
import Loader from 'components/Loader'

const buttonStyle =
	'mt-2 bg-blue-600 rounded-md py-[3px] px-5 text-white text-xl font-medium transition duration-200 hover:bg-blue-700'

export default function Words() {
	const dispatch = useAppDispatch()
	const { words, loading } = useAppSelector((store) => store.words)

	return (
		<div className='m-auto'>
			<div className='relative min-w-[1000px] my-3 py-10 px-20 rounded-md bg-slate-600'>
				{loading && <Loader />}
				{words.map((word) => (
					<WordInput {...word} key={JSON.stringify(word)} />
				))}
				<hr className='mt-3 mb-2' />
				<div className='flex justify-between'>
					<NavLink to='/practice' className={buttonStyle}>
						Practice
					</NavLink>
					<div className='flex'>
						<button
							className={`${buttonStyle} mr-2`}
							onClick={() => dispatch(fetchWords(16))}
						>
							Random
						</button>
						<button
							className={`${buttonStyle} ml-1`}
							onClick={() => dispatch(fetchNewest(16))}
						>
							Newest
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
