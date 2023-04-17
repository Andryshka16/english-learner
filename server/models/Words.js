import { model, Schema } from 'mongoose'

const wordsSchema = new Schema(
	{
		english: { type: String, required: true },
		russian: { type: String, required: true },
	},
	{ timestamps: true }
)

export default model('WORDS', wordsSchema)
