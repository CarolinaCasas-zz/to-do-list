import './to-do-list.css';
import logo from './img/logo.png';
import trash from  './img/trash.png'

export function ToDoVisual(props) {

  const{enterTask,tasks, handleAddTask, handleInputChange, deleteTask}=props;
  
    return (
      <div className='to-do-list'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <main className='principal-content'>
          <p className='message'>Hello! You have {tasks.length} pending tasks</p>
          <form
            className='new-task'
            onSubmit={handleAddTask}>
            <input
              type='text'
              onChange={handleInputChange}
              value={enterTask}
              placeholder='Enter new task' />
            <button type='submit' value='submit'>Add</button>
          </form>
          <ul>
            {
              tasks.map(task =>
              (<li 
                key={task.id}
                className='list-item'>
                <input
                 id={task.id}
                 type='checkbox' 
                 value={task.taskDescription} 
                 onClick={(e)=>console.log(e.target.checked)}/>
                <label htmlFor={task.id}> {task.taskDescription} </label>
                <img 
                src={trash} alt='delete' 
                className='trash' 
                onClick={()=>deleteTask(task.id)}/>
              </li>)
              )
            }
          </ul>
  
        </main>
      </div>
    );
  }
  