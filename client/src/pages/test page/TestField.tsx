import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { updateOne } from 'redux/features/testSlice'
import { TestField as ITestField } from 'types/storeTypes'

const TestField = ({ english, russian, insertion }: ITestField) => {
	const dispatch = useAppDispatch()
	const { showResults } = useAppSelector((store) => store.test)
	const correctColor = 'bg-opacity-60 ' + (insertion === russian ? 'bg-green-500' : 'bg-red-500')

	return (
		<div className='flex items-center mb-0.5'>
			<div className='py-1 px-3 text-white text-xl bg-slate-600 rounded-md'>{english}</div>
			<p className='text-xl text-white font-bold mx-3'>-</p>
			{insertion ? (
				<div
					className={`py-1 px-3 text-white text-xl rounded-md transition duration-200 ${
						showResults ? correctColor : 'bg-slate-600'
					}`}
				>
					{insertion}
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
					onDragLeave={(e) => e.currentTarget.classList.remove('scale-95')}
					onDrop={() => dispatch(updateOne(english))}
				></div>
			)}
		</div>
	)
}

export default TestField
