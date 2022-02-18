import { useEffect, useReducer, useState } from 'react';
import { taskReducer } from './components/taskReducer';
/* import logo from './img/logo.png'; */
import './to-do-list.css';
import { ToDoVisual } from './to-do-visual';


function App() {

  const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  const [tasks, dispatch] = useReducer(taskReducer, [], init);
  const [enterTask, setEnterTask] = useState('');

  const handleInputChange = (event) => {
    setEnterTask(
      event.target.value
    )
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      taskDescription: enterTask,
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTask
    }

    dispatch(action);

    setEnterTask('');

  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const deleteTask = (taskID) => {
    const action = {
      type: 'delete',
      payload: taskID
    };

    dispatch(action)
  }

  return (
    <ToDoVisual
      enterTask={enterTask}
      tasks={tasks}
      handleAddTask={handleAddTask}
      handleInputChange={handleInputChange}
      deleteTask={deleteTask} />
  )
}


export default App;
