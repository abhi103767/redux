import logo from './logo.svg';
import './App.css';
import { addToCount } from './Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import AddCount from './component/AddCount';
import Todo from './component/Todo';
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

   
  return (
    <div className="App">


      <AddCount />
      <Todo />
      </div>
     
  );
}

export default App;
