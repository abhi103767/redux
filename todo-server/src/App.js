import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import { Routes, Route } from 'react-router-dom';
import SingleTodo from './components/SingleTodo';
import Login from './components/Login';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path = '/' element = {<TaskList/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route  path = '/:id' element = {<SingleTodo/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
