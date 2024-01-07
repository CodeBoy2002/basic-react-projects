import React, { useState } from "react";

const AddTasksInputs = () => {
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState('');
  const [filter, setFilter] = useState('all')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(singleTask.trim() !== '') {
        const newTask = [...tasks, { id: Date.now(), task: singleTask, completed: false }]
        setTasks(newTask)
        setSingleTask('')
    }
  };

  const handleToggleChange = (toggleId)=> {
    setTasks((prevTask)=> prevTask.map((item)=> item.id === toggleId ? { ...item, completed: !item.completed } : item))
  }

  const handleFilterChange = (newFilter)=> {
    setFilter(newFilter)
  }

  const filterTasks = tasks.filter((task)=> {
    if(filter === 'completed') {
        return task.completed
    } else if(filter === 'incomplete') {
        return !task.completed
    }

    return true
  })

  return (
    <>
      <div style={{ marginLeft: '9rem',fontFamily: 'serif' }}>TODO LIST FOR TASK COMPLETION</div>
      <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '15px' }}>
          <label htmlFor="task" />
          <input
            type="text"
            name="singleTask"
            value={singleTask}
            onChange={(e)=> setSingleTask(e.target.value)}
          />
          <button style={{ margin: 'auto', width: '20%', height: '3rem' }} className="btn btn-primary">Add Task</button>
        </form>

        <div>
            <label>Filter: </label>
            <select value={filter} onChange={(e)=> handleFilterChange(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>

        <div style={{ margin: 'auto' }}>
            <h3>TODO LIST</h3>
            <ul>
                {tasks.map((item)=> {
                    const { id, task, completed } = item
                    return (
                        <li key={id}>
                            <input type="checkbox" value={completed} onChange={()=> handleToggleChange(id)}/>
                            <p style={{ textDecoration: completed ? "line-through" : 'none' }}>{task}</p>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {filterTasks.map((item)=> {
                    const { id, task, completed } = item
                    return (
                        <li key={id}>
                            <input type="checkbox" value={completed} onChange={()=> handleToggleChange(id)}/>
                            <p style={{ textDecoration: completed ? "line-through" : 'none' }}>{task}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
      </div>
    </>
  );
};

export default AddTasksInputs;
