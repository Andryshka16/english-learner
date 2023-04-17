import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'
import { Word } from 'types/word'

export function WordInput(word: Word) {
	const [{ english, russian }, setWord] = useState(word)

	const inputStyle =
		'mx-4 bg-transparent text-2xl text-white whitespace-nowrap line-clamp-1 text-ellipsis focus:outline-none'

	const initial = word.english === english && word.russian === russian

	return (
		<form className='flex items-center' onSubmit={(e) => e.preventDefault()}>
			<input
				className={inputStyle}
				value={english}
				onChange={(e) => setWord((p) => ({ ...p, english: e.target.value }))}
			/>
			<input
				className={inputStyle}
				value={russian}
				onChange={(e) => setWord((p) => ({ ...p, russian: e.target.value }))}
			/>
			<div
				className={`absolute right-[10px] flex items-center transition duration-200 ${
					initial ? 'opacity-0 translate-x-5' : ''
				}`}
			>
				<BsCheckCircle
					color='#00ff3c'
					size={21}
					className={'transition duration-200 hover:scale-110 mr-1'}
				/>
				<AiOutlineCloseCircle
					color='#ff2121'
					size={23}
					className='transition duration-200 hover:scale-110'
					onClick={() => setWord(word)}
				/>
			</div>
			<button type='submit'></button>
		</form>
	)
}
