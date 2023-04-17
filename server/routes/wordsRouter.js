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

export default wordsRouter
