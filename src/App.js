import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './components/Calender';
import CompletedTasks from './components/CompletedTasks';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='todo' element={<ToDo />}></Route>
        <Route path='calender' element={<Calender />}></Route>
        <Route path='completedTasks' element={<CompletedTasks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
