import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { wordsInitialstate } from 'types/storeTypes'
import { Word } from 'types/word'

const api = import.meta.env.VITE_WORDS_API

const initialState: wordsInitialstate = {
	words: [],
	loading: true,
}

export const fetchWords = createAsyncThunk<Word[], number>(
	'words/fetchWords',
	async (amount) => (await axios.get(`${api}/${amount}`)).data
)

export const fetchNewest = createAsyncThunk<Word[], number>(
	'words/fetchNewest',
	async (amount) => (await axios.get(`${api}/newest/${amount}`)).data
)

export const deleteWord = createAsyncThunk<{ newWord: Word; _id: string }, string>(
	'words/deleteWord',
	async (_id) => (await axios.delete(`${api}/delete/${_id}`)).data
)

const wordsSlice = createSlice({
	name: 'words',
	initialState,
	reducers: {},
	extraReducers: (build) =>
		build
			.addCase(fetchWords.pending, () => initialState)
			.addCase(fetchWords.fulfilled, (state, action) => {
				state.words = action.payload
				state.loading = false
			})
			.addCase(fetchNewest.pending, () => initialState)
			.addCase(fetchNewest.fulfilled, (state, action) => {
				state.words = action.payload
				state.loading = false
			})
			.addCase(deleteWord.fulfilled, (state, action) => {
				const { _id, newWord } = action.payload
				state.words = state.words.map((word) => (word._id === _id ? newWord : word))
			}),
})

export default wordsSlice.reducer
export const {} = wordsSlice.actions
