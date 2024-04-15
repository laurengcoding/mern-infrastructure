import AuthPage from '../AuthPage/AuthPage';
import RhythmicDictationPage from '../RhythmicDictationPage/RhythmicDictationPage';
import MyLearningPage from '../MyLearningPage/MyLearningPage';
import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      {
        user ? 
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/learn/rhythmicdictation" element={ <RhythmicDictationPage /> } />
          <Route path="/learn/mylearning" element={ <MyLearningPage />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
