import { Word } from 'types/word'

type DraggableWordProps = Word & {
	dragging: string | null
	setDragging: React.Dispatch<React.SetStateAction<string | null>>
}

const DraggableWord = ({ russian, dragging, setDragging }: DraggableWordProps) => (
	<div
		key={`w${russian}`}
		draggable
		className={`inline-block text-xl text-white m-2 py-1.5 px-4 bg-slate-600 rounded-lg cursor-grab transition duration-200 hover:scale-105 select-none ${
			dragging === russian ? 'opacity-50' : ''
		}`}
		onDragStart={() => setDragging(russian)}
		onDragEnd={() => setDragging(null)}
	>
		{russian}
	</div>
)

export default DraggableWord
