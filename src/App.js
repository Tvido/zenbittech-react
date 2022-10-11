import './App.css';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Main } from './views/Main/Main';
import { Feedbacks } from './views/Feedbacks/Feedbacks';
import { Social } from './components/Social/Social';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" restricted element={<Main />} exact="true"></Route>
        <Route path="/feedback" restricted element={<Feedbacks />}></Route>
      </Routes>

      <Social />
    </>
  );
}

export default App;
