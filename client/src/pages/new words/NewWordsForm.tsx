import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const api = import.meta.env.VITE_WORDS_API

const textAreaStyle = (isValid: boolean) =>
	`with-scroll bg-slate-800 w-[45%] h-[70vh] px-2 text-white text-2xl transition duration-300 outline-none border rounded-lg ${
		!isValid ? 'border-red-500' : 'border-transparent focus:border-blue-500'
	}`

export default function AddWords() {
	const [first, setFirst] = useState(true)
	const [second, setSecond] = useState(true)

	const ref1 = useRef<HTMLTextAreaElement>(null)
	const ref2 = useRef<HTMLTextAreaElement>(null)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const words = []
		const english = ref1.current?.value.split('\n').filter((i) => i) || []
		const russian = ref2.current?.value.split('\n').filter((i) => i) || []

		if (english.length === 0 || russian.length > english.length) setFirst(false)
		if (russian.length === 0 || english.length > russian.length) setSecond(false)

		if (english.length === russian.length) {
			for (let i = 0; i < english.length; i++) {
				const newWord = { english: english[i], russian: russian[i] }
				words.push(newWord)
			}
		}
		if (words.length) {
			await axios.put(`${api}/new`, words)
			if (ref1.current && ref2.current) {
				ref1.current.value = ''
				ref2.current.value = ''
			}
		}
	}

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const { height } = entries[0].contentRect
			if (ref1.current) ref1.current.style.height = `${height}px`
		})
		if (ref2.current) resizeObserver.observe(ref2.current)
	}, [])

	return (
		<form onSubmit={handleSubmit} className='w-2/3 h-2/3 mx-auto my-10'>
			<div className='flex justify-around h-fit'>
				<textarea
					className={textAreaStyle(first) + ' resize-none'}
					onChange={() => setFirst(true)}
					ref={ref1}
				></textarea>
				<textarea
					className={textAreaStyle(second)}
					onChange={() => setSecond(true)}
					ref={ref2}
				></textarea>
			</div>
			<button className='block mx-auto my-4 py-1 px-5 rounded text-white font-medium bg-blue-500 transition duration-200 hover:scale-105'>
				Submit
			</button>
		</form>
	)
}
