import NavBar from 'components/Navbar'
import AddWords from 'pages/add words/AddWords'
import Words from 'pages/word practice/WordsPractice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/storeHooks'
import { fetchWords } from 'redux/features/words'

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
					<Route path='/addWords' element={<AddWords />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
