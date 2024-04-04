import { DiaryEntry, Visibility, Weather } from '../type'

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: '2021-01-01',
    weather: Weather.Rainy,
    visibility: Visibility.Poor,
    comment: 'It was a rainy day, I stayed at home.'
  },
  {
    id: 2,
    date: '2021-03-20',
    weather: Weather.Rainy,
    visibility: Visibility.Poor,
    comment: 'I went to the beach with my friends.'
  }
]

export default diaryEntries
