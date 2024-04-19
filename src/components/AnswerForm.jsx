import AnswerDisplay from "./AnswerDisplay";

import { notes } from "../data";
import { useState } from "react"

export default function AnswerForm({ addNoteToState }) {

    const [addedNote, setAddedNote] = useState([]);
// TODO: change addNote to addedNotes


    const noteBtns = notes.map((note, index) => {
        // console.log(addNote);

    function _buttonClicked(note) {
        // console.log(note);
        setAddedNote([...addedNote, note]);

    }
        // if current value > 8
            // disable buttons
            // alert something like 'these bars are full'
        // else 
            // return the button functionality below
        return (
            
        <button 
        key={index}
        value={ note.key }
        onClick={() => _buttonClicked(note)}
        className="border-2 border-black flex flex-row items-center w-20 h-20 hover:bg-lime-100 rounded"
        >
            <img src={note.noteImg} alt={note.name} className="object-contain w-full h-full" />
            {/* { note.name } */}
        </button>
        )
})

    function _handleSubmit(event) {
        event.preventDefault();
        addedNote.filter((key, index) => {
            const noteKey = addedNote[index].key;
            console.log(noteKey);
            return (addNoteToState(noteKey))
    })
        
    }

    return (
        <div>
        <section className="flex items-center justify-center bg-cover bg-center h-24 bg-[url('/img/percussion-staff.png')]">
                <div className=" w-10/12 grid grid-cols-12">
                  { addedNote.map((note, index) => (
                    <img key={index} src={note.noteImg} alt={note.name} className="object-cover" /> 
                  )) }
                </div>

            </section>
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