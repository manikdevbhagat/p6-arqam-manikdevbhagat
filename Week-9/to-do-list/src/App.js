import { useState } from "react";
import React from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import InputForm from "./Components/Input/Input";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  const storedList = JSON.parse(localStorage.getItem("storedList"));
  const [toDoList, setToDoList] = useState(storedList ? storedList : []);

  const addTask = (data) => {
    const obj = { id: toDoList.length + 1, task: data, done: false };
    const copy = [...toDoList];
    copy.push(obj);
    setToDoList(copy);
    localStorage.setItem("storedList", JSON.stringify(copy));
  };

  const deleteTask = (id) => {
    const copy = toDoList.filter((item) => item.id !== id);
    setToDoList(copy);
    localStorage.setItem("storedList", JSON.stringify(copy));
  };

  const toggleTask = (id) => {
    const copy = toDoList.map((task) =>
      task.id === Number(id) ? { ...task, done: !task.done } : task
    );
    setToDoList(copy);
    localStorage.setItem("storedList", JSON.stringify(copy));
  };
  return (
    <div className="container">
      <Heading />
      <InputForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
