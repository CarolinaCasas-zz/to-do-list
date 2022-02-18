/* eslint-disable jsx-a11y/alt-text */
import './to-do-list.css';
import logo from './img/logoLetters.png';
import trash from './img/trash.png'
import checkedS from './img/check.png';
import noChecked from './img/checkGray.png';

export function ToDoVisual(props) {

  const { enterTask, tasks, handleAddTask, handleInputChange, deleteTask, checked } = props;

  return (
    <div className='to-do-list'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

      </header>
      <main className='principal-content'>
        <div className='principal-content-section1'>
          <p className='message'>Hello!</p><br/>
          <p className='message'> You have {tasks.length} pending tasks</p>
          <form
            className='new-task'
            onSubmit={handleAddTask}>
            <input
              className='enter-text'
              type='text'
              onChange={handleInputChange}
              value={enterTask}
              placeholder='Enter new task'
              required />
            <button className='submit-style' type='submit' value='submit'>Add</button>
          </form>
          <div className='section1-commercial'>
          </div>
        </div>

        <ul>
          {
            tasks.map(task =>
            (<li
              key={task.id}
              className={` ${task.done && 'complete'} `}>
              <input
                id={task.id}
                type='checkbox'
                value={task.taskDescription}
                onClick={(e)=>checked(task.id, e.target.checked)} />
              <label htmlFor={task.id}>
              <img alt='check' className='check-img'src={` ${task.done ? checkedS : noChecked} `}/>
              <p>{task.taskDescription}</p> 
              </label>
              <img
                src={trash} alt='delete'
                className='trash'
                onClick={() => deleteTask(task.id)} />
            </li>)
            )
          }
        </ul>

      </main>
      <footer>
        <p>All rights reserved</p>
        <p>Privacy policies</p>
      </footer>
    </div>
  );
}
