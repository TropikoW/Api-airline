'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.getEntriesWithoutSensitiveInfo = exports.addEntry = exports.getEntries = undefined
const diariesJson1 = __importDefault(require('./diaries.json'))
const diaries = diariesJson1.default
const getEntries = () => diaries
exports.getEntries = getEntries
const addEntry = () => undefined
exports.addEntry = addEntry
const getEntriesWithoutSensitiveInfo = () => diaries
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo
