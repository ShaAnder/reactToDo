import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddtasks(task) {
    setTasks((tasks) => [...tasks, task]);
    // expected behaviour react only updates the next render
    console.log(tasks);
  }

  // function to delete an task, creates a new array and only adds tasks with non same id
  function handleDeletetask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  // function to handle task toggling, maps over task array and then creates a new one with the tasks that are packed set to true
  function handleToggletask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, packed: !task.packed } : task
      )
    );
  }

  // Function to reset the task array, does a window confirmation, if ok, sets task array to []
  function handleCleartasks() {
    const confirmed = window.confirm("Are you sure you want to clear list?");

    if (confirmed) setTasks([]);
  }

  return (
    <div className="app">
      <div className="site-content">
        <div className="app-header">
          <Logo />
        </div>
        <div className="main">
          <FormAddTasks onAddtasks={handleAddtasks} />
          <TaskList tasks={tasks} />
        </div>
        <div className="footer">
          <Stats />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return <h1>To Do List</h1>;
}

function FormAddTasks({ onAddtasks }) {
  // get our form state
  const [description, setDescription] = useState("");
  // create id / key for the task
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    // if field empty early return
    if (!description) return;

    // new task variable with our fields
    const newtask = { description, completed: false, id: id };

    onAddtasks(newtask);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input Task Here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function TaskList({ tasks }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

/**
 * Function for the tasks being created, these are created inside the packing list and the data is passed to them
 * @param {*} task -> task to be made, toggle and delete functions
 * @returns jsx for task rendering
 * @author ShaAnder
 */
function Task({ task, onDeletetask, onToggletask }) {
  // jsx with our new task
  return (
    <li>
      <span style={task?.completed ? { textDecoration: "line-through" } : {}}>
        {task?.description}
      </span>
    </li>
  );
}

function Stats() {
  return <footer className="stats">You have X tasks to complete!</footer>;
}
