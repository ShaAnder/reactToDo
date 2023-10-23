import { Task } from "./Task";
import Button from "./Button";

export function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
    </div>
  );
}
