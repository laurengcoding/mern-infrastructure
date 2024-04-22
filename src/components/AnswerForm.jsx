
import { notes } from "../data";
import { useState } from "react"

export default function AnswerForm({ addAnswerToState, clearAnswer }) {

    const [addedNote, setAddedNote] = useState([]);

    // clear state here and in parent component
    function resetNotes() {
        setAddedNote([]);
        clearAnswer();
    }

    // create buttons that represent musical notes
    const noteBtns = notes.map((note, index) => {

        // update state in current component with note object
        function _buttonClicked(note) {
            setAddedNote([...addedNote, note]);
        }

        // if current value > 8
            // disable buttons
            // alert something like 'these bars are full'
        // else 
            // return the button functionality below

        return (
            <button 
            type="button"
            key={index}
            value={ note.key }
            onClick={() => _buttonClicked(note)}
            className="border-2 border-black flex flex-row items-center w-20 h-20 hover:bg-lime-100 rounded">
                <img src={note.noteImg} alt={note.name} className="object-contain w-full h-full" />
            </button>
            )
    })

    // submit answer and pass only the keys for each clicked note up to the parent
    function _handleSubmit(event) {
        event.preventDefault();
        const notes = addedNote.map((key, index) => {
            const noteKey = addedNote[index].key;
            return noteKey;
        });
        addAnswerToState(notes);
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

                <button type="button"
                onClick={resetNotes}>Clear Answer</button>
            </form>
        </div>
    )
}