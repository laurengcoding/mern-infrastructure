import audio from "./assets/audio/simple_44.mp3"

export const notes = [
    {
        name: 'semiquaver',
        key: 'SQu',
        value: 0.25
    },
    {
        name: 'quaver',
        key: 'Qu',
        value: 0.5,
    },
    {
        name: 'crotchet',
        key: 'Cr',
        value: 1,
        // TODO: add 'symbol' key with img link value
    },
    {
        name: 'minim',
        key: 'Mi',
        value: 2,
    },
    {
        name: 'semibreve',
        key: 'SBr',
        value: 4,
    }
]

export const audioExercises = [
    {
        file: audio,
        name: 'Simple 4/4 Rhythm',
    },
    {
        file: '/src/assets/audio/test_2.mp3',
        name: 'Simple 4/4 test',
    },
]