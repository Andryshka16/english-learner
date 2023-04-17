import { WordField } from './WordField'
import { useAppSelector } from 'hooks/storeHooks'

export default function Words() {
	const buttonStyle =
		'mt-2 bg-blue-600 rounded-md py-[3px] px-5 text-white text-xl font-medium hover:bg-blue-700 transition duration-200'

	const { words } = useAppSelector((store) => store.words)

	return (
		<div className='relative w-fit m-auto mt-10 rounded-md py-5 px-8 bg-slate-600'>
			{words.map((word) => (
				<WordField {...word} key={JSON.stringify(word)} />
			))}
			<hr className='mt-3 mb-2' />
			<div className='flex justify-between'>
				<button className={buttonStyle} onClick={() => {}}>
					Do test
				</button>
				<button className={buttonStyle} onClick={() => {}}>
					Next
				</button>
			</div>
		</div>
	)
}
