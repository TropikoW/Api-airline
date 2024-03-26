import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../type'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
