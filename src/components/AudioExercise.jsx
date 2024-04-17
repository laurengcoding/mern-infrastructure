import { audioExercises } from "../data"
import { useState, useEffect } from 'react';

export default function AudioExercise() {
    
const [currentExercise, setCurrentExercise] = useState(null);

function selectClip() {
    const randomIndex = Math.floor(Math.random() * audioExercises.length);
    const randomExercise = audioExercises[randomIndex];
    setCurrentExercise(randomExercise);
}

useEffect(() => {
    selectClip();
}, []);

console.log(currentExercise);

    return (
        <div>
        {currentExercise && (
            <div>
                <audio controls>
                    <source src={currentExercise.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        )}
    </div>
    );
}

