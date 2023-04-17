import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

type formState = {
	englishWords: string
	russianWords: string
}

export default function AddWords() {
	const { register, handleSubmit } = useForm<formState>()
	const fn = () => {}
	const textAreaStyle =
		'with-scroll bg-slate-800 w-[45%] h-[70vh] px-2 text-white text-2xl transition duration-300 outline-none border border-transparent rounded-lg focus:border-blue-500'

	const ref1 = useRef<HTMLTextAreaElement>(null)
	const ref2 = useRef<HTMLTextAreaElement>(null)

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
		<form onSubmit={handleSubmit(fn)} className='w-2/3 h-2/3 mx-auto my-10'>
			<div className='flex justify-around h-fit'>
				<textarea
					{...register('englishWords')}
					className={textAreaStyle + ' resize-none'}
					ref={ref1}
				></textarea>
				<textarea
					{...register('russianWords')}
					className={textAreaStyle}
					ref={ref2}
				></textarea>
			</div>
			<button className='block mx-auto my-4 py-1 px-5 rounded text-white font-medium bg-blue-500 transition duration-200 hover:scale-105'>
				Submit
			</button>
		</form>
	)
}
