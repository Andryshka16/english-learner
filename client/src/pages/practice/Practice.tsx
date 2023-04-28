import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { useEffect } from 'react'
import { resetTest, setResultsVisible } from 'redux/features/practiceSlice'
import TestField from './TestField'
import UnUsedWord from './UnUsedWord'
import Loader from 'components/Loader'

export default function Practice() {
	const dispatch = useAppDispatch()
	const { words, loading } = useAppSelector((store) => store.words)
	const { testFields, unUsedWords } = useAppSelector((store) => store.test)

	const showResults = () => dispatch(setResultsVisible())

	useEffect(() => {
		dispatch(resetTest(words))
	}, [words])

	return loading ? (
		<Loader />
	) : (
		<div>
			<div className='py-6 px-10 grid grid-cols-2 gap-4 w-2/3 min-w-fit m-auto my-5 text-justify'>
				{testFields.map((word) => (
					<TestField {...word} key={`w${word.russian}`} />
				))}
			</div>
			<hr className='w-3/4 m-auto h-0.5 border-none bg-slate-600'/>
			<div className='w-2/3 m-auto py-6 text-justify'>
				{unUsedWords.map((word) => (
					<UnUsedWord word={word} />
				))}

				<div className='flex items-center w-fit m-auto'>
					<button
						className='mt-7 text-white font-semibold py-2 px-7 rounded-md transition duration-200 bg-blue-500 hover:bg-blue-600'
						onClick={showResults}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}
