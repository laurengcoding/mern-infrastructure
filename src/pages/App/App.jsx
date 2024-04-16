import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage';
import RhythmicDictationPage from '../RhythmicDictationPage/RhythmicDictationPage';
import MyLearningPage from '../MyLearningPage/MyLearningPage';


import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import LoginForm from '../../components/LoginForm/LoginForm';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="">
      <div>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/learn/rhythmicdictation" element={ <RhythmicDictationPage /> } />
          <Route path="/learn/mylearning" element={ <MyLearningPage />} />
          <Route path="/login" element={ <LoginForm setUser={setUser} /> } />
        </Routes>
      </div>
    </main>
  );
}

export default App;
