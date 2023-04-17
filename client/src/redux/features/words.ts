import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { wordsInitialstate } from 'types/storeTypes'
import { Word } from 'types/word'

const initialState: wordsInitialstate = {
	words: [],
	loading: true,
}

export const fetchWords = createAsyncThunk<Word[], number>('words/fetchWords', async (n) => {
	const response = await fetch(import.meta.env.VITE_SERVER + '/words/' + n)
	const words = await response.json()
	return words
})

const wordsSlice = createSlice({
	name: 'words',
	initialState,
	reducers: {},
	extraReducers: (build) =>
		build
			.addCase(fetchWords.fulfilled, (state, action) => {
				state.words = action.payload
			})
			.addCase(fetchWords.rejected, () => {
				console.log('something went wrong!')
			}),
})

export default wordsSlice.reducer
export const {} = wordsSlice.actions
