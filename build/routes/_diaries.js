'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express = __importDefault(require('express'))
const router = express.default.Router()
router.get('/', (_req, res) => {
  res.send('Fetching all entry diaries')
})
router.post('/', (_req, res) => {
  res.send('Saving a diaries')
})
exports.default = router
