import { Router } from 'express'
import Words from '../models/Words.js'

const wordsRouter = Router()

wordsRouter.get('/:n', async (req, res) => {
	const n = parseInt(req.params.n)
	try {
		const elements = await Words.aggregate([{ $sample: { size: n } }])
		res.send(elements)
	} catch (error) {
		res.status(500).send('Error fetching random elements')
	}
})

wordsRouter.delete('/delete/:id', async (req, res) => {
	const { id: _id } = req.params
	try {
		await Words.deleteOne({ _id })
		const [newWord] = await Words.aggregate([{ $sample: { size: 1 } }])
		res.send({ newWord, _id })
	} catch (error) {
		res.status(500).send('Error deleting this element')
	}
})

export default wordsRouter
