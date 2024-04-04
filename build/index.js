"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importa la libreria/framework express, utilizada comunmente para trabajar con nodejs
const express_1 = __importDefault(require("express"));
// importa el archivo que contiene las rutas de la aplicacion
const diaries_1 = __importDefault(require("./routes/diaries"));
// crea una instancia de express
const app = (0, express_1.default)();
// permite a express entender los datos que vienen en formato json
app.use(express_1.default.json());
// establece el puerto en el que se ejecutara el servidor
const PORT = 3000;
// crea una ruta de prueba para verificar que el servidor esta funcionando
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong ' + new Date().toLocaleDateString());
});
// establece la ruta de la aplicacion
app.use('/api/diaries', diaries_1.default);
// inicia el servidor en el puerto establecido
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
