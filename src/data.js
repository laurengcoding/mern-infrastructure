import audio from "./assets/audio/simple_44.mp3"

export const notes = [
    {
        'name': 'semiquaver',
        'value': 0.25
    },
    {
        'name': 'quaver',
        'value': 0.5,
    },
    {
        'name': 'crotchet',
        'value': 1,
        // TODO: add 'symbol' key with img link value
    },
    {
        'name': 'minim',
        'value': 2,
    },
    {
        'name': 'semibreve',
        'value': 4,
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