import { Word } from './word'

export interface wordsInitialstate {
	words: Word[]
	loading: boolean
}

export interface TestField {
	english: string
	russian: string
	insertion: string | null
}

export interface TestInitialState {
	testFields: TestField[]
	unUsedWords: string[]
	showResults: boolean
	dragging: string | null
}
