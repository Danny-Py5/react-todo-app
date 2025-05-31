import { useContext, useState } from "react";
import TaskContext from "../../context/TaskContext.js";
import generateRandomId from "../utils/utils.js";

export default function AddTaskModal() {
  const { setTasks } = useContext(TaskContext);
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <dialog id="task-modal">
      <div className="task-modal__header">
        <p>
          <strong>Add Task</strong>
        </p>
        <button
          className="closeModal"
          onClick={() => document.getElementById("task-modal").close()}
        >
          <div className="tx tx-1"></div>
          <div className="tx tx-2"></div>
        </button>
      </div>
      <label htmlFor="task-description">Task Description</label>
      <input
        onChange={(e) => setTaskDescription(() => e.target.value)}
        type="text"
        name="task-description"
        id="task-description"
      />

      <button
        onClick={() => {
          setTasks((pre) => {
            return [
              ...pre,
              {
                date: new Date().toDateString(),
                title: taskDescription,
                id: generateRandomId(),
              },
            ];
          });
          document.getElementById("task-modal").close();
        }}
        className="closeModal"
      >
        Save
      </button>
    </dialog>
  );
}
