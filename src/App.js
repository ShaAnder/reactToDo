export default function App() {
  return (
    <div className="app">
      <div className="site-content">
        <div className="app-header">
          <Logo />
        </div>
        <div className="main">
          <FormAddTasks />
          <TaskList />
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

function FormAddTasks() {
  return (
    <form className="add-form">
      <input placeholder="enter task here..."></input>
    </form>
  );
}

function TaskList() {
  return (
    <div className="list">
      <ul>
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </ul>
    </div>
  );
}

function Tasks() {
  return <li>This is a task</li>;
}

function Stats() {
  return <footer className="stats">You have X tasks to complete!</footer>;
}
