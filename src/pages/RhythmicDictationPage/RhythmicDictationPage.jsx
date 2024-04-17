import { useState } from "react"

import AudioExercise from "../../components/AudioExercise"
import AnswerDisplay from "../../components/AnswerDisplay"
import AnswerForm from "../../components/AnswerForm"
import { notes } from "../../data"

export default function RhythmicDictationPage() {

    const [rhythmAnswer, setRhythmAnswer] = useState([]);

    function addNoteToState(noteBtnPressed) {
        setRhythmAnswer([...rhythmAnswer, noteBtnPressed]);
    };

    // function addRhythmAnswer(rhythmAnswer) {
       // setRhythmAnswer([...rhythmAnswer, rhythmAnswer])
    // }

    return (
        <div>
            <h1>RhythmicDictationPage</h1>
            <AudioExercise />
            <AnswerDisplay />
            <AnswerForm addNoteToState={addNoteToState} />
        </div>
    )
}