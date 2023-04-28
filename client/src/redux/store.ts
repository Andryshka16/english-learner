import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './features/wordsSlice'
import testReducer from './features/practiceSlice'

const store = configureStore({
	reducer: {
		words: wordsReducer,
		test: testReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
