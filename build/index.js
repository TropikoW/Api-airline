'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
// importa la libreria/framework express, utilizada comunmente para trabajar con nodejs
const express = __importDefault(require('express'))
// importa el archivo que contiene las rutas de la aplicacion
const diaries = __importDefault(require('./routes/_diaries'))
// crea una instancia de express
const app = (0, express.default)()
// permite a express entender los datos que vienen en formato json
app.use(express.default.json())
// establece el puerto en el que se ejecutara el servidor
const PORT = 3000
// crea una ruta de prueba para verificar que el servidor esta funcionando
app.get('/ping', (_req, res) => {
  console.log('ping' + ' ' + new Date().toLocaleDateString())
  res.send('pong ' + new Date().toLocaleDateString())
})
// establece la ruta de la aplicacion
app.use('/api/diaries', diaries.default)
// inicia el servidor en el puerto establecido
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
