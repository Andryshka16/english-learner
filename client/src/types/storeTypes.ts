import { Word } from './word'

export interface wordsInitialstate {
	words: Word[]
	shuffled: Word[]
	loading: boolean
}
