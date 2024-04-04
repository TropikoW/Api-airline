"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../type");
const diaryEntries = [
    {
        id: 1,
        date: '2021-01-01',
        weather: type_1.Weather.Rainy,
        visibility: type_1.Visibility.Poor,
        comment: 'It was a rainy day, I stayed at home.'
    },
    {
        id: 2,
        date: '2021-03-20',
        weather: type_1.Weather.Rainy,
        visibility: type_1.Visibility.Poor,
        comment: 'I went to the beach with my friends.'
    }
];
exports.default = diaryEntries;
