import NavBar from 'components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/storeHooks'
import { fetchWords } from 'redux/features/wordsSlice'
import InsertWords from 'pages/insert words/InputForm'
import Words from 'pages/knowledge/Words'
import Practice from 'pages/practice/Practice'
import Footer from 'components/Footer'

function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchWords(16))
	})
	return (
		<div className='flex flex-col h-screen'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Words />} />
					<Route path='/insert' element={<InsertWords />} />
					<Route path='/practice' element={<Practice />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
