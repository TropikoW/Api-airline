import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../type'

// Importamos los datos de los diarios desde el archivo 'diaries.json'
// Importamos los tipos DiaryEntry y NonSensitiveInfoDiaryEntry desde el archivo '../type'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// Creamos una variable 'diaries' que almacena los datos de los diarios
// La variable tiene el tipo DiaryEntry[] y se inicializa con los datos de 'diaryData'

export const getEntries = (): DiaryEntry[] => diaries

// Definimos una función 'getEntries' que devuelve todos los diarios
// La función devuelve un array de objetos DiaryEntry

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

// Definimos una función 'addEntry' que no hace nada y devuelve 'undefined'
// Esta función se puede utilizar para agregar nuevos diarios en el futuro

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

// Definimos una función 'findById' que busca un diario por su ID
// La función toma un parámetro 'id' de tipo number y devuelve un objeto NonSensitiveInfoDiaryEntry o 'undefined'
// Si se encuentra un diario con el ID proporcionado, se devuelve una versión del diario sin el campo 'comment'

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

// Definimos una función 'getEntriesWithoutSensitiveInfo' que devuelve todos los diarios sin la información sensible
// La función utiliza el método 'map' para crear un nuevo array de objetos NonSensitiveInfoDiaryEntry
// Cada objeto contiene solo los campos 'id', 'date', 'weather' y 'visibility' del diario original
