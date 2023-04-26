import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { setDragging } from 'redux/features/testSlice'

const UnUsedWord = ({ word }: { word: string }) => {
	const dispatch = useAppDispatch()
	const { dragging } = useAppSelector((store) => store.test)
	return (
		<div
			key={`w${word}`}
			draggable
			className={`inline-block text-xl text-white m-2 py-1.5 px-4 bg-slate-600 rounded-lg cursor-grab transition duration-200 hover:scale-105 select-none ${
				dragging === word ? 'opacity-50' : ''
			}`}
			onDragStart={() => dispatch(setDragging(word))}
			onDragEnd={() => dispatch(setDragging(null))}
		>
			{word}
		</div>
	)
}

export default UnUsedWord
