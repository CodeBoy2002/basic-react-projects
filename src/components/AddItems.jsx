import { useState } from "react";

export const AddItems = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const newAddedTask = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false },
      ];
      setTasks(newAddedTask);
      setNewTask("");
    }
  };

  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleChange = (taskId) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div>
        <p
          style={{
            color: "blue",
            fontSize: "2rem",
            fontFamily: "sans-serif",
            marginLeft: "-5rem",
          }}
        >
          Enter your task:-{" "}
        </p>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            padding: "1rem",
            marginLeft: "-30px",
            borderRadius: "1rem",
            fontFamily: "cursive",
          }}
          placeholder="Enter Task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {tasks.map((item) => {
          const { id, text, completed } = item;
          return (
            <li
              key={id}
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleToggleChange(id)}
              />
              {text}
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </div>
    </>
  );
};
