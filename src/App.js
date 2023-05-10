import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if(todoList.includes(newTask)){
    setNewTask('');
    alert('You are trying to add a duplicate value')
    }else{
      setToDoList([...todoList, newTask]);
    }
  };

  const deleteTask = (taskName) => {
    const newList = todoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });

    setToDoList(newList);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h1 className="text-xl font-semibold mb-4">To-Do List</h1>
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={handleChange}
            className="rounded-l-lg p-2 w-full mr-0 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="Add task"
          />
          <button
            onClick={addTask}
            className="rounded-r-lg bg-blue-500 text-white px-4 py-2 border-blue-500 border-t border-b border-r font-semibold"
          >
            Add
          </button>
        </div>
        {todoList.map((task) => {
          return (
            <div className="flex items-center justify-between py-2" key={task}>
              <h3 className="text-gray-800">{task}</h3>
              <button
                onClick={() => {
                  deleteTask(task);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
