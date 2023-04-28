import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import wordsRouter from './routes/wordsRouter.js'

const PORT = process.env.PORT || '4000'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/words', wordsRouter)
app.use('/', (_, res) => res.send('<h1>Server is live</h1>'))

mongoose.connect(process.env.MONGO_DB).then(() => console.log('Connected to database'))

app.listen(PORT, (error) => {
	if (error) {
		return console.log(error)
	}
	console.log('Server is live')
})
