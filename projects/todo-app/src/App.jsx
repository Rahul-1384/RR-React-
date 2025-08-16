import './App.css'
import AddToDo from './components/AddToDo';
import MapMethod from './components/MapMethod';
import Navbar from './components/Navbar';
import ToDoItem from './components/ToDoItem';

function App(){
  return <>
    <Navbar />
    <div className='grid-container'>
      <AddToDo />
      <ToDoItem />
    </div>
  </>
}

export default App;