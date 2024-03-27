// importa la libreria/framework express, utilizada comunmente para trabajar con nodejs
import express from 'express'

// importa el archivo que contiene las rutas de la aplicacion
import diaryRouter from './routes/_diaries'

// crea una instancia de express
const app = express()

// permite a express entender los datos que vienen en formato json
app.use(express.json())

// establece el puerto en el que se ejecutara el servidor
const PORT = 3000

// crea una ruta de prueba para verificar que el servidor esta funcionando
app.get('/ping', (_req, res) => {
  console.log('ping' + ' ' + new Date().toLocaleDateString())
  res.send('pong ' + new Date().toLocaleDateString())
})

// establece la ruta de la aplicacion
app.use('/api/diaries', diaryRouter)

// inicia el servidor en el puerto establecido
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
