import { useReducer, useState } from 'react';
import { taskReducer } from './components/taskReducer';
import logo from './img/logo.png';
import './to-do-list.css';


function App() {
  
  const initialState = [{
    id: new Date().getTime(),
    taskDescription: "hola",
    done: false,
  }]
  
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [enterTask, setEnterTask]=useState({});

  const handleInputChange=(event)=>{
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
    /*  console.log('nueva tarea'); */
  }


  return (
    <div className='to-do-list'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <p>{tasks.length}</p>

        
        <form
          className='new-task'
          onSubmit={handleAddTask}>
          <input
            type='text'
            onChange={handleInputChange}
            placeholder='Enter new task' />
          <button type='submit' value='submit'>Add</button>
        </form>


        <ul>
          {
            tasks.map(task =>
            (<li
              key={task.id}
              className='list-item'>
              <input id={task.id} type='checkbox' />
              <label for={task.id}> {task.taskDescription}</label>
              <button>delete</button>
            </li>)
            )
          }
        </ul>

      </main>
    </div>
  );
}

export default App;
