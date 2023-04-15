import { useState } from 'react'
import { WordField } from './wordField'
import wordsList from 'assets/words'

const randomIndex = () => Math.floor(Math.random() * wordsList.length)
export const getWords = () => {
	const array: number[] = []
	for (let i = 1; i <= 15; i++) {
		let index = randomIndex()
		while (array.find((i) => i === index)) index = randomIndex()
		array.push(index)
	}
	return array.map((index) => wordsList[index])
}

export default function Words() {
	const [words, setWords] = useState(getWords())

	const buttonStyle =
		'mt-2 bg-blue-600 rounded-md py-[3px] px-5 text-white text-sm hover:bg-blue-700 transition duration-200'

	return (
		<div className='relative w-fit m-auto mt-10 rounded-md py-5 px-12 bg-slate-600'>
			{words.map((word) => (
				<WordField {...word} key={JSON.stringify(word)} />
			))}
			<div className='flex justify-between'>
				<button className={buttonStyle} onClick={() => {}}>
					Do test
				</button>
				<button className={buttonStyle} onClick={() => setWords(getWords())}>
					Next
				</button>
			</div>
		</div>
	)
}
