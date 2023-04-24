import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { useEffect } from 'react'
import { resetTest, setResultsVisible } from 'redux/features/testSlice'
import TestField from './TestField'
import UnUsedWord from './UnUsedWord'
import Loader from 'components/Loader'

export interface unUsedWord {
	word: string
}

export default function Test() {
	const dispatch = useAppDispatch()
	const { words, loading } = useAppSelector((store) => store.words)
	const { testFields, unUsedWords } = useAppSelector((store) => store.test)

	useEffect(() => {
		dispatch(resetTest(words))
	}, [words])

	return loading ? (
		<Loader />
	) : (
		<div>
			<div className='grid grid-cols-2 gap-4 w-1/2 min-w-fit m-auto my-5 text-justify'>
				{testFields.map((word) => (
					<TestField {...word} key={`w${word.russian}`} />
				))}
			</div>

			<hr className='w-3/4 m-auto my-3' />

			<div className='w-2/3 m-auto text-justify'>
				{unUsedWords.map((word) => (
					<UnUsedWord word={word} />
				))}

				<div className='flex w-fit m-auto'>
					<button
						className='m-3 text-white font-semibold py-2 px-7 rounded-md transition duration-200 bg-blue-500 hover:bg-blue-600'
						onClick={() => dispatch(setResultsVisible())}
					>
						Submit
					</button>
					<button
						className='m-3 text-white font-semibold py-2 px-7 rounded-md transition duration-200 bg-blue-500 hover:bg-blue-600'
						onClick={() => dispatch(resetTest(words))}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	)
}
