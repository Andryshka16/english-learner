import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TestInitialState } from 'types/storeTypes'
import { Word } from 'types/word'
import shuffle from 'utils/shuffle'

const initialState: TestInitialState = {
	testFields: [],
	unUsedWords: [],
	showResults: false,
	dragging: null,
}

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		resetTest: (state, action: PayloadAction<Word[]>) => {
			const words = action.payload

			const testFields = words.map((word) => ({ ...word, insertion: null }))
			state.testFields = shuffle(testFields)

			state.showResults = false
			state.unUsedWords = shuffle(words.map(({ russian }) => russian))
		},
		setResultsVisible: (state) => {
			state.showResults = true
		},
		setDragging: (state, action: PayloadAction<string | null>) => {
			state.dragging = action.payload
		},
		updateOne: (state, action: PayloadAction<string>) => {
			const word = state.testFields.find(({ english }) => english === action.payload)
			if (word) {
				word.insertion = state.dragging
				state.unUsedWords = state.unUsedWords.filter((word) => word !== state.dragging)
				state.dragging = null
			}
		},
	},
})

export default testSlice.reducer
export const { resetTest, setResultsVisible, setDragging, updateOne } = testSlice.actions
