
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
        <div className="w-screen ">
            <section className="flex items-center justify-center h-60 bg-contain bg-no-repeat bg-center bg-[url('/img/percussion-staff.png')]">
                <div className=" w-11/12 grid grid-cols-12">
                  { addedNote.map((note, index) => (
                    <img key={index} src={note.noteImg} alt={note.name} className="object-cover size-40 pb-6" /> 
                  )) }
                </div>
            </section>
            
            <div className="bg-amber-50 pt-10 border-t-2 border-t-amber-100" >
            <section className="flex justify-center align-center ">
                <h3 className="border-2 border-rose-300 bg-red-50 px-10 py-2" >Notate the rhythmic ostinato by clicking the note buttons below</h3>
            </section>
            
            <form onSubmit={_handleSubmit} >
                <div className="mt-4 " >
                    <div className="flex flex-row justify-center align-center space-x-5">{ noteBtns }</div>
                </div>
                <div className="flex flex-row justify-center items-center pt-10 gap-x-2">
                    <button className="border-2 border-black rounded space-x-5 py-2 px-7 hover:bg-lime-100" type="submit">Submit Answer</button>
                    <button className="border-2 border-black rounded space-x-5 py-2 px-7 hover:bg-lime-100" type="button"
                    onClick={resetNotes}>Clear Answer</button>
                </div>
            </form>


            </div>
        </div>
    )
}