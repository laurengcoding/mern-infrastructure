import { audioExercises } from "../data"
import { useState, useEffect } from 'react';

export default function AudioExercise({ audioKey, setAudioKey }) {
    
    const [currentExercise, setCurrentExercise] = useState(null);

    // Select a random clip
    function selectClip() {
        const randomIndex = Math.floor(Math.random() * audioExercises.length);
        const randomExercise = audioExercises[randomIndex];
        setCurrentExercise(randomExercise);
        return randomExercise;
    }

    // Load random clip on page render
    useEffect(() => {
        const { key } = selectClip();
        setAudioKey(key);
    }, []);

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

