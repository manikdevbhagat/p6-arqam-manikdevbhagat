import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import React from "react";
import Proptypes from "prop-types";

InputForm.propTypes = {
  addTask: Proptypes.func.isRequired
};

function InputForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (!userInput) return;
    addTask(userInput);
    setUserInput("");
  };
  return (
    <div className="input-field">
      <input
        id="newTask"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task"
      />
      <MdAddCircle className="add-task" onClick={handleSubmit} />
    </div>
  );
}

export default InputForm;
