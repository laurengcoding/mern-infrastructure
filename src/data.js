import audio from "./assets/audio/simple_44.mp3"

export const notes = [
    {
        name: 'semiquaver',
        key: 'SQu',
        value: 0.25,
        noteImg: '/img/semiquaver.jpg'
    },
    {
        name: 'quaver',
        key: 'Qu',
        value: 0.5,
        noteImg: '/img/quaver.jpg'
    },
    {
        name: 'crotchet',
        key: 'Cr',
        value: 1,
        noteImg: "/img/crotchet.png"
    },
    {
        name: 'minim',
        key: 'Mi',
        value: 2,
        noteImg: '/img/minim.jpg'
    },
    {
        name: 'semibreve',
        key: 'SBr',
        value: 4,
        noteImg: '/img/semibreve.png'
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