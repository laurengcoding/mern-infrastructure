import AnswerDisplay from "./AnswerDisplay";

import { notes } from "../data";
import { useState } from "react"

export default function AnswerForm({ addNoteToState }) {

    const [addNote, setAddNote] = useState([]);


    const noteBtns = notes.map((note, index) => {
        console.log(addNote);
        // if current value > 8
            // disable buttons
            // alert something like 'these bars are full'
        // else 
            // return the button functionality below
        return (
            
        <button 
        key={index}
        value={ note.key }
        onClick={(event) => setAddNote([...addNote, note.key])}
        className="border-2 border-black flex flex-row items-center w-20 h-20 hover:bg-lime-100 rounded"
        >
            <img src={note.noteImg} alt={note.name} className="object-contain w-full h-full" />
            {/* { note.name } */}
        </button>
        )
})

    function _handleSubmit(event) {
        event.preventDefault();
        addNoteToState(addNote);
    }
// (noteBtns)
    return (
        <div>
            <AnswerDisplay addNote={addNote} _handleSubmit={_handleSubmit} />
            <h1>AnswerForm</h1>
            <form onSubmit={_handleSubmit} >
                <div>
                    <div className="flex flex-row space-x-5">{ noteBtns }</div>
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