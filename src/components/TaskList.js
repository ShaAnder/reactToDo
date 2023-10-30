import { Task } from "./Task";
import Button from "./Button";
import { useState } from "react";

export function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  // state for sorting / default sorting
  const [sortBy, setSortBy] = useState("input");

  // derive our sort state (use let to change between our sort values)
  let sortedTasks;

  // sort by input
  if (sortBy === "input") sortedTasks = tasks;

  // sort by description (uses locale compare and sort to sort alphabetically)
  if (sortBy === "description")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // sort by packed status, slices string similar to above and sorts all true values down to the bottom of array
  if (sortBy === "packed")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="list">
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Completed</option>
        </select>
      </div>
      <ul>
        {sortedTasks.map((task) => (
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
