import Button from "./Button";

/**
 * Function for the tasks being created, these are created inside the packing list and the data is passed to them
 * @param {*} task -> task to be made, toggle and delete functions
 * @returns jsx for task rendering
 * @author ShaAnder
 */

export function Task({ task, onDeleteTask, onToggleTask }) {
  // jsx with our new task

  return (
    <li style={{ cursor: "pointer" }}>
      <span
        style={task?.completed ? { textDecoration: "line-through" } : {}}
        onClick={() => onToggleTask(task.id)}
      >
        {task?.description}
      </span>
      <span onClick={() => onDeleteTask(task.id)}>🗑</span>
    </li>
  );
}
