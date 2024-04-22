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
        <div className="h-dvh flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold pb-10" >Rhythmic Dictation</h1>
            <AudioExercise audioKey={audioKey} setAudioKey={setAudioKey} />
            <div>
                { correctAnswer === true && (
                    <div className="mt-5 border-2 border-green-400 rounded bg-green-300 px-6 py-4">
                        <p className="font-bold text-center pb-4">You got it!</p>
                        <form>
                        <button className="border-2 border-black rounded px-5 py-3 bg-green-100 lg:hover:bg-green-50 hover:font-bold">Next Exercise</button> 
                        </form>
                    </div> 
                )}
                { correctAnswer === false && (
                    <div className="mt-5 border-2 border-red-400 rounded bg-red-300 px-6 py-4" >
                        <p className="font-bold">Try again</p>
                    </div>
                )}

            </div>
            <AnswerForm addAnswerToState={addAnswerToState} clearAnswer={clearAnswer} />
        </div>
    )
}