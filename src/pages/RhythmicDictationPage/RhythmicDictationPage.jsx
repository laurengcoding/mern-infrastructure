import { useState } from "react"

import AudioExercise from "../../components/AudioExercise"
import AnswerDisplay from "../../components/AnswerDisplay"
import AnswerForm from "../../components/AnswerForm"
import { notes } from "../../data"

export default function RhythmicDictationPage() {

    const [rhythmAnswer, setRhythmAnswer] = useState([]);
    const [audioKey, setAudioKey] = useState([]);

    function addNoteToState(noteBtnPressed) {
        setRhythmAnswer([...rhythmAnswer, noteBtnPressed]);
    };

    // function getAudioKey(key) {
    //     setAudioKey([...audioKey, key]);
    // }

    
    // TODO: function to capture 'key' value of selected audio in <AudioExercise />

    return (
        <div>
            <h1>RhythmicDictationPage</h1>
            <AudioExercise />
            <AnswerDisplay />
            <AnswerForm addNoteToState={addNoteToState} />
        </div>
    )
}