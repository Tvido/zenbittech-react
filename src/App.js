import './App.css';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { Main } from './views/Main/Main';
import { Feedbacks } from './views/Feedbacks/Feedbacks';

function App() {
  return (
    <>
    <NavBar />
    
    <Routes>
        <Route path="/" restricted element={<Main />} exact="true"></Route>
        <Route path="/auth" restricted element={<Feedbacks />}></Route>
      </Routes></>
  );
}

export default App;
