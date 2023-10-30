import { useState } from "react";
import Button from "./Button";

export function FormAddTasks({ onAddtasks }) {
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

    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input Task Here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
