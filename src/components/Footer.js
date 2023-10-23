import Button from "./Button";

export function Footer({ onClearTask }) {
  return (
    <>
      <div className="stats">
        <Button onClick={() => onClearTask()}>Clear List</Button>
      </div>
    </>
  );
}
