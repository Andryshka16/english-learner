import { Word as WordType } from 'types/word'
import { TiTickOutline } from 'react-icons/ti'
import { MdOutlineCancel } from 'react-icons/md'
import { useState } from 'react'

export function WordField(word: WordType) {
	const [{ english, russian }, setWord] = useState(word)

	const inputStyle =
		'bg-transparent w-30 text-white whitespace-nowrap line-clamp-1 text-ellipsis focus:outline-none'
	const initial = JSON.stringify(word) === JSON.stringify({ english, russian })

	return (
		<form className='flex items-center'>
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
			<button type='submit'></button>

			<div
				className={`absolute right-[10px] flex transition duration-200 ${
					initial ? 'opacity-0 translate-x-5' : ''
				}`}
			>
				<TiTickOutline color='#00ff3c' />
				<MdOutlineCancel color='#ff2121' onClick={() => setWord(word)} />
			</div>
		</form>
	)
}
