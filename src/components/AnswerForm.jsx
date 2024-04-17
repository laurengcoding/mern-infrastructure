import { notes } from "../data";
import { useState } from "react"

export default function AnswerForm({ addNoteToState }) {

    const [addNote, setAddNote] = useState(null);


    const noteBtns = notes.map((note, index) => (
        <button 
        key={index}
        value={ note.key }
        onClick={(event => setAddNote(event.target.value))}
        >
            { note.name }
        </button>
    ))

    function _handleSubmit(event) {
        event.preventDefault();
        addNoteToState(addNote);
    }

    return (
        <div>
            <h1>AnswerForm</h1>
            <form onSubmit={_handleSubmit} >
                <div>
                    <div>{ noteBtns }</div>
                </div>
                <button type="submit">Submit Answer</button>
            </form>
        {/* // form with only buttons
            // button is clicked
            // check if currentBarValue < beatsPerBar
                // if currentBarValue + btn value > beatsPerBar
                    // do not render note
                // render img
            // else
                // do not render note */}
        </div>
    )
}