import NavBar from 'components/Navbar'
import NewWords from 'pages/new words/NewWordsForm'
import Words from 'pages/practice/WordsPractice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/storeHooks'
import { fetchWords } from 'redux/features/wordsSlice'

function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchWords(15))
	})
	return (
		<div className='flex flex-col h-screen'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Words />} />
					<Route path='/newWords' element={<NewWords />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
