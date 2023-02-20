import { MdDelete } from "react-icons/md";
import React from "react";
import PropTypes from "prop-types";

ToDoItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

function ToDoItem({ task, deleteTask, toggleTask }) {
  const handleDelete = (event) => {
    event.preventDefault();
    deleteTask(task.id);
  };
  const handleToggle = () => {
    toggleTask(task.id);
  };
  return (
    <div className="task-list-item">
      <input type="checkbox" onClick={handleToggle} />
      <span className={"done-" + task.done}>{task.task}</span>
      <MdDelete className="delete-task" onClick={handleDelete} />
    </div>
  );
}

export default ToDoItem;