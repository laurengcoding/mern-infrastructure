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
    <main className="m-5">
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
      <section className="flex-col justify-center content-center bg-[url('./img/instruments.jpg')] bg-cover bg-no-repeat py-20">
        <h1 className="text-2xl font-bold pt-4 pb-14">Music 1 Hub</h1>

        <div className="bg-slate-50/50">
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
