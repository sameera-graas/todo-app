import React,{useState} from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const TaskItem = ({ task, deleteTask, editTask, toggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.taskName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.taskName, newTaskName);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleBlur = () => {
    if (newTaskName.trim() === '') {
      setNewTaskName(task.taskName);
    }
    handleSave();
  };

  return (
    <li className={task.checked ? 'items completed' : 'items'}>
      <div className="items-text">
        <input
          type='checkbox'
          checked={task.checked}
          onChange={() => toggleTask(task)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newTaskName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <p>{task.taskName}</p>
        )}
      </div>
      <div className="icons">
        <FiEdit
          className="edit-icon"
          onClick={handleEdit}
        />
        <MdDeleteSweep
          className="delete-icon"
          onClick={() => deleteTask(task)}
        />
      </div>
    </li>
  );
}

export default TaskItem;

