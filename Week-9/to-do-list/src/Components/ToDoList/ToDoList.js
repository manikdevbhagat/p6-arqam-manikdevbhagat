import ToDoItem from "../ToDoItem/ToDoItem";
import React from "react";
import PropTypes from "prop-types";

ToDoList.propTypes = {
  toDoList: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired
};



function ToDoList({ toDoList, deleteTask, toggleTask }) {
  toDoList.map.propTypes={
    task: PropTypes.object.isRequired
  };
  return (
    <div className="task-list">
      {toDoList.map((task) => {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;