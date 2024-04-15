import AuthPage from '../AuthPage/AuthPage';
import RhythmicDictationPage from '../RhythmicDictationPage/RhythmicDictationPage';
import MyLearningPage from '../MyLearningPage/MyLearningPage';
import GetStarted from '../../components/GetStarted';
import AboutUs from '../../components/AboutUs';

import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      <div>
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
      </div>
      <section class="main-display">
        <h1 class="main-heading">Music 1 Hub</h1>

        <div class="main-subtitle">
          <h3 className="subtitle-text">Master Music Theory</h3>
          <h3 className="subtitle-text">Develop Your Aural Skills</h3>
          <h3 className="subtitle-text">Blitz the HSC</h3>
        </div>
      </section>
      <GetStarted />
      <AboutUs />
    </main>
  );
}

export default App;
