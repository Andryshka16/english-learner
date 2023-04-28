import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { updateOne } from 'redux/features/practiceSlice'
import { TestField as ITestField } from 'types/storeTypes'

const TestField = ({ english, russian, insertion }: ITestField) => {
	const dispatch = useAppDispatch()
	const { showResults } = useAppSelector((store) => store.test)
	
	const correctColor = 'bg-opacity-60 ' + (insertion === russian ? 'bg-green-500' : 'bg-red-500')
	const width = insertion ? 'w-fit' : 'w-40'
	const bgColor = showResults ? correctColor : 'bg-slate-600'

	return (
		<div className='flex items-center mb-0.5'>
			<div className='py-1 px-4 text-white text-xl bg-slate-600 rounded-md'>{english}</div>
			<p className='text-xl text-white font-bold mx-3'>-</p>

			<div
				className={`${width} py-1 px-4 min-h-[36px] max-w-[300px] text-left line-clamp-1 text-ellipsis text-white text-xl rounded-md ${bgColor} transition duration-200`}
				onDragOver={(e) => {
					e.preventDefault()
					e.currentTarget.classList.add('scale-95')
				}}
				onDragLeave={(e) => e.currentTarget.classList.remove('scale-95')}
				onDrop={() => dispatch(updateOne(english))}
			>
				{insertion}
			</div>
		</div>
	)
}

export default TestField
