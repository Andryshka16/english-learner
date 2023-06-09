import axios from 'axios'
import { useAppDispatch } from 'hooks/storeHooks'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { deleteWord } from 'redux/features/wordsSlice'
import { Word } from 'types/word'

const api = import.meta.env.VITE_WORDS_API

export default function WordInput(word: Word) {
	const dispatch = useAppDispatch()

	const [visible, setVisible] = useState(false)
	const [initialWord, setInitialWord] = useState(word)
	const [{ english, russian }, setWord] = useState(word)

	const inputStyle =
		'w-1/2 mx-4 bg-transparent text-[25px] text-white line-clamp-1 text-ellipsis focus:outline-none'
	const buttonContainerStyle = 'absolute right-3 w-12 flex items-center transition duration-200'
	const buttonStyle = 'transition duration-200 hover:scale-110'
	const hasChanged = english !== initialWord.english || russian !== initialWord.russian

	return (
		<form
			className='flex items-center'
			onSubmit={(e) => e.preventDefault()}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
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

			<div className={`${buttonContainerStyle} justify-center`}>
				<RiDeleteBinLine
					color='red'
					size={20}
					className={`transition duration-200 hover:scale-125 ${
						!visible || hasChanged ? 'opacity-0 -translate-x-5 pointer-events-none' : ''
					}`}
					onClick={() => dispatch(deleteWord(word._id))}
				/>
			</div>

			<div
				className={`${buttonContainerStyle} justify-between ${
					!hasChanged ? 'opacity-0 translate-x-5 pointer-events-none' : ''
				}`}
			>
				<BsCheckCircle
					color='#00ff3c'
					size={21}
					className={buttonStyle}
					onClick={() =>
						axios
							.post(`${api}/${word._id}`, { english, russian })
							.then(() => setInitialWord((prev) => ({ ...prev, english, russian })))
					}
				/>
				<AiOutlineCloseCircle
					color='#ff2121'
					size={23}
					className={buttonStyle}
					onClick={() => setWord(word)}
				/>
			</div>
			<button type='submit'></button>
		</form>
	)
}
