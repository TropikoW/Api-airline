"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.addDiary = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// Importamos los datos de los diarios desde el archivo 'diaries.json'
// Importamos los tipos DiaryEntry y NonSensitiveInfoDiaryEntry desde el archivo '../type'
const diaries = diaries_json_1.default;
// Creamos una variable 'diaries' que almacena los datos de los diarios
// La variable tiene el tipo DiaryEntry[] y se inicializa con los datos de 'diaryData'
const getEntries = () => diaries;
exports.getEntries = getEntries;
// Definimos una función 'getEntries' que devuelve todos los diarios
// La función devuelve un array de objetos DiaryEntry
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: Math.max(...diaries.map(d => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
// Definimos una función 'addEntry' que no hace nada y devuelve 'undefined'
// Esta función se puede utilizar para agregar nuevos diarios en el futuro
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== undefined) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
// Definimos una función 'findById' que busca un diario por su ID
// La función toma un parámetro 'id' de tipo number y devuelve un objeto NonSensitiveInfoDiaryEntry o 'undefined'
// Si se encuentra un diario con el ID proporcionado, se devuelve una versión del diario sin el campo 'comment'
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
// Definimos una función 'getEntriesWithoutSensitiveInfo' que devuelve todos los diarios sin la información sensible
// La función utiliza el método 'map' para crear un nuevo array de objetos NonSensitiveInfoDiaryEntry
// Cada objeto contiene solo los campos 'id', 'date', 'weather' y 'visibility' del diario original
