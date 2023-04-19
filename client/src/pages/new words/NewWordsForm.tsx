import { useEffect, useRef } from 'react'
import { newWord } from 'types/newWord'

export default function AddWords() {
	const ref1 = useRef<HTMLTextAreaElement>(null)
	const ref2 = useRef<HTMLTextAreaElement>(null)

	const textAreaStyle =
		'with-scroll bg-slate-800 w-[45%] h-[70vh] px-2 text-white text-2xl transition duration-300 outline-none border border-transparent rounded-lg focus:border-blue-500'

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const english = ref1.current?.value.split('\n').filter((i) => i)
		const russian = ref2.current?.value.split('\n').filter((i) => i)
		if (english && russian) {
			const words: newWord[] = []
			if (english?.length === russian?.length) {
				for (let i = 0; i < english?.length; i++) {
					words.push({ english: english[i], russian: russian[i] })
				}
			}
			console.log(words)
		}
	}

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const { height } = entries[0].contentRect
			if (ref1.current) {
				ref1.current.style.height = `${height}px`
			}
		})
		if (ref2.current) resizeObserver.observe(ref2.current)
	})

	return (
		<form onSubmit={handleSubmit} className='w-2/3 h-2/3 mx-auto my-10'>
			<div className='flex justify-around h-fit'>
				<textarea className={`${textAreaStyle} resize-none `} ref={ref1}></textarea>
				<textarea className={`${textAreaStyle}`} ref={ref2}></textarea>
			</div>
			<button className='block mx-auto my-4 py-1 px-5 rounded text-white font-medium bg-blue-500 transition duration-200 hover:scale-105'>
				Submit
			</button>
		</form>
	)
}
