import './App.css';
import { useState } from 'react';

function App() {

  const [todoList , setToDoList] = useState([])
  const [newTask , setNewTask] = useState('')
  

  const handleChange = (event)=>{

    setNewTask(event.target.value)

  }


  const addTask = () => {
    if (todoList.includes(newTask)){
    setNewTask('')
    alert('You are trying to add duplicate values')
    
    }else{
      setToDoList([...todoList , newTask])
    }

  }

  const deleteTask = (taskName) => {
    const newList = todoList.filter((task) => {
      if (task === taskName){
         return false;
      }else{
        return true;
      }
    })

    setToDoList(newList)
  }
  return (
    <div className="App">
      <div>
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add</button>
      </div>

      {todoList.map((task) => {

        return(
          <>
          <h3>{task}</h3>
          <button onClick={() => {deleteTask(task)}}>Delete</button>
          </>
        )

      })}
      <div>

      </div>
    </div>
  );
}

export default App;
