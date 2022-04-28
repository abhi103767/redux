import logo from './logo.svg';
import './App.css';
import { addToCount } from './Redux/counter/action';
import { useDispatch, useSelector } from 'react-redux';
import AddCount from './component/AddCount';
import Todo from './component/Todo';
function App() {
  const dispatch = useDispatch();
  

   
  return (
    <div className="App">
      <AddCount />
      <Todo />
      </div>
     
  );
}

export default App;
