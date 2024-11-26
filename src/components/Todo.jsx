import React from "react";
import "../App.css";

function Todo() {
  const [task, setTask] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  function handleInputvalue(event) {
    setNewTask(event.target.value);
  }

  function handleAddvalue() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoveValue(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function handleUpValue(index) {
    if (index > 0) {
      const handleUp = [...task];
      [handleUp[index], handleUp[index - 1]] = [
        handleUp[index - 1],
        handleUp[index],
      ];
      setTask(handleUp);
    }
  }

  function handleDownValue(index) {
    if (index < task.length - 1) {
      const handleDown = [...task];
      [handleDown[index], handleDown[index + 1]] = [
        handleDown[index + 1],
        handleDown[index],
      ];
      setTask(handleDown);
    }
  }
  return (
    <div>
      <h1>Todo</h1>
      <input type="text" onChange={handleInputvalue} value={newTask} />
      <button onClick={handleAddvalue}>Add</button>

      <ul>
        {task.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleRemoveValue(index)}>Remove</button>
            <button onClick={() => handleUpValue(index)}>Move Up</button>
            <button onClick={() => handleDownValue(index)}>Move down</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
