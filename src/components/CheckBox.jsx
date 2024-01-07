import React, { useState } from "react";

const CheckBox = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Shopping", complete: false },
    { id: 2, task: "Jogging", complete: false },
    { id: 3, task: "Music Practice", complete: false },
    { id: 4, task: "Documentation", complete: false },
    { id: 5, task: "Lunch", complete: false },
  ]);

  const handleToggleChange = (taskId)=> {
    setTasks((prevTask)=> prevTask.map((task)=> task.id === taskId ? { ...task, complete: !task.complete } : task))
  }
  return (
    <div>
      <h2>TODO LIST FOR TASK COMPLETION</h2>
      <div>
        {tasks.map((items) => {
          const { id, task, complete } = items;
          return (
            <div style={{ display: "flex", flexDirection: "row", gap: '10px' }}>
              <input
                key={id}
                type="checkbox"
                checked={complete}
                onChange={() => handleToggleChange(id)}
                style={{ marginTop: '20px' }}
              />
              <p style={{ textDecoration: complete ? 'line-through' : 'none' }}>{task}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
