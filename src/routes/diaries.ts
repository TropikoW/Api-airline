import express from 'express'
import * as diaryService from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id))
  return (diary !== undefined)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/:id', (_req, res) => {
  res.send('Saving all diaries')
})

export default router
