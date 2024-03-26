import express from 'express'

import diaryRouter from './routes/_diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('ping' + ' ' + new Date().toLocaleDateString())
  res.send('pong ' + new Date().toLocaleDateString())
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
