import { useState } from "react"
import AudioExercise from "../../components/AudioExercise"
import AnswerForm from "../../components/AnswerForm"

export default function RhythmicDictationPage() {

    // user's submitted answer
    const [rhythmAnswer, setRhythmAnswer] = useState([]);
    // randomly selected audio
    const [audioKey, setAudioKey] = useState([]);
    // is the answer correct?
    const [correctAnswer, setCorrectAnswer] = useState(null);


    // update state with user answer once they have submitted
    function addAnswerToState(notes) {
        setRhythmAnswer([...notes]);
        compareAnswer();
    };

    // check if user's answer is correct by comparing two arrays
    function compareAnswer() {
        if (audioKey.length > 0) {
            if (JSON.stringify(rhythmAnswer) === JSON.stringify(audioKey)) {
                setCorrectAnswer(true);
            } else {
                setCorrectAnswer(false);
            }
        } else {
            setCorrectAnswer(null);
        }
    }
    
    // 'reset' state
        // this is called in child function
    function clearAnswer() {
        setRhythmAnswer([]);
        setCorrectAnswer(null);
    }

    return (
        <div>
            <h1>Rhythmic Dictation</h1>
            <AudioExercise audioKey={audioKey} setAudioKey={setAudioKey} />
            <div>
                { correctAnswer === true && (
                    <div>
                        <p>You got it!</p>
                        <button>Next Exercise</button> 
                    </div> 
                )}
                { correctAnswer === false && (
                    <div>
                        <p>Try again</p>
                        <button
                        onClick={clearAnswer}>Clear Answer</button>
                    </div>
                )}

            </div>
            <AnswerForm addAnswerToState={addAnswerToState} clearAnswer={clearAnswer} />
        </div>
    )
}