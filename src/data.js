import audio from "./assets/audio/simple_44.mp3"

export const notes = [
    {
        name: 'semiquaver',
        key: 'SQu',
        value: 0.25,
        noteImg: '/img/semiquaver.png'
    },
    {
        name: 'quaver',
        key: 'Qu',
        value: 0.5,
        noteImg: '/img/quaver.png'
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
        noteImg: '/img/minim.png'
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
        file: '/src/assets/audio/simple_44.mp3',
        name: '4/4 Rhythm',
        key: ["Cr", "Cr", "Qu", "Qu", "Qu", "Qu", "SQu", "SQu", "SQu", "SQu", "Mi", "Cr"]
    },
    {
        file: '/src/assets/audio/test_2.mp3',
        name: 'Simple 4/4 test',
        key: ["Cr", "Qu"]
    },
]