import { configureStore } from '@reduxjs/toolkit'
import wordsReducer from './features/words'

const store = configureStore({
	reducer: {
		words: wordsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
