import React, {useState} from 'react';

const AddInput = ({addTask}) => {
  const [task, setTask] = useState('');
  
  function handleInput(event){
    setTask(event.target.value);
  }
  function handleAddTask(event){
    event.preventDefault();
    if (task.trim()==='') return;
    addTask(task);
    setTask('');
  }

  return (
    <form className="inputField" onSubmit={handleAddTask}>
        <input 
          type="text" 
          value={task} 
          placeholder="Add Item.." 
          onChange={handleInput}
        />
        <button type="submit">+</button>
    </form>
  )
}

export default AddInput;
