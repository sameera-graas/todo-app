import {useState} from 'react';
import AddInput from "./Components/AddInput"
import TaskItem from "./Components/TaskItem"

function App() {
  const [toDoList, setToDoList] = useState([])

  const addTask = (taskName) =>{
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  };

  function deleteTask (deleteTaskName){
    setToDoList(toDoList.filter((task) => task !== deleteTaskName));
  }

  function editTask(oldTaskName, newTaskName) {
    setToDoList(toDoList.map((task) => {
      if (task.taskName === oldTaskName) {
        return { ...task, taskName: newTaskName };
      }
      return task;
    }));
  };

  const toggleTask = (taskToToggle) => {
    setToDoList(toDoList.map((task) => {
      if (task === taskToToggle) {
        return { ...task, checked: !task.checked };
      }
      return task;
    }));
  };

  return (
    <div className="container">
      <h1>TO-DO APP</h1>
      <AddInput addTask={addTask}/>
      <div className="toDoList">
        <ul className="list-items">
          {toDoList.map((task,key)=>(
            <TaskItem 
            task={task} 
            key={key}
            deleteTask = {deleteTask} 
            editTask = {editTask}
            toggleTask={toggleTask}/>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
