import { useState } from "react";
import { Logo } from "./components/Logo";
import { FormAddTasks } from "./components/FormAddTasks";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddtasks(task) {
    setTasks((tasks) => [...tasks, task]);
    // expected behaviour react only updates the next render
    console.log(tasks, task);
  }

  // function to delete an task, creates a new array and only adds tasks with non same id
  function handleDeletetask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  // function to handle task toggling, maps over task array and then creates a new one with the tasks that are packed set to true
  function handleToggletask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
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
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeletetask}
            onToggleTask={handleToggletask}
          />
        </div>
        <div className="footer">
          <Footer onClearTask={handleCleartasks} />
        </div>
      </div>
    </div>
  );
}
