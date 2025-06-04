import { useContext, useEffect, useRef, useState } from "react";
import TaskContext from "../../context/TaskContext.js";
import generateRandomId from "../utils/utils.js";
import { saveToLocalStorage } from "./hook/useGetTasks.js";
import { truncateOne } from "../../styles/utils.module.css";
console.log(truncateOne);

export let taskModalRef = null;

export default function TaskModal({ edit }) {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskDescription, setTaskDescription] = useState("");
  const _taskModalRef = useRef();

  useEffect(() => {
    taskModalRef = _taskModalRef;

    // console.log(tasks);
  }, [tasks]);

  return (
    <>
      {/* Editing Dialog JSX */}
      {edit ? (
        <dialog ref={_taskModalRef} id="task-modal">
          <div className="task-modal__header">
            <p>
              <strong>Edit Task</strong>
            </p>
            <button
              className="closeModal"
              onClick={() => _taskModalRef.current.close()}
            >
              <div className="tx tx-1"></div>
              <div className="tx tx-2"></div>
            </button>
          </div>

          <div className="task-input-body-cont center">
            <p className={truncateOne} style={{ wordBreak: "break-all" }}>
              <b>Title: </b>
              <span>
                {tasks.find((task) => task.id === edit.id)?.title || ""}
              </span>
            </p>
            <label aria-label="task-description" htmlFor="task-description">
              Task Description
            </label>
            <input
              onChange={(e) => setTaskDescription(() => e.target.value)}
              type="text"
              value={taskDescription}
              name="task-description"
              id="task-description"
              className="task-description"
              placeholder="Enter something to edit task"
              autoFocus
            />

            <button
              disabled={taskDescription.trim() === ""}
              className="closeModal"
              onClick={() => {
                setTasks((current) => {
                  return current.map((task) => {
                    if (task.id === edit.id) {
                      task.title = taskDescription;
                    }
                    return task;
                  });
                });
                setTaskDescription("");
                _taskModalRef.current.close();
                saveToLocalStorage(tasks);
              }}
            >
              Update
            </button>
          </div>
        </dialog>
      ) : (
        // Add task Dialog JSX
        <dialog ref={_taskModalRef} id="task-modal">
          <div className="task-modal__header">
            <p>
              <strong>Add Task</strong>
            </p>
            <button
              className="closeModal"
              onClick={() => _taskModalRef.current.close()}
            >
              <div className="tx tx-1"></div>
              <div className="tx tx-2"></div>
            </button>
          </div>

          <div className="task-input-body-cont center">
            <label aria-label="task-description" htmlFor="task-description">
              Task Description
            </label>
            <input
              onChange={(e) => setTaskDescription(() => e.target.value)}
              type="text"
              value={taskDescription}
              name="task-description"
              id="task-description"
              className="task-description"
              placeholder="Enter your task description"
              autoFocus
            />

            <button
              disabled={taskDescription.trim() === ""}
              onClick={() => {
                const newTask = {
                  date: new Date().toDateString(),
                  title: taskDescription,
                  id: generateRandomId(),
                  dateOBJ: new Date(),
                };

                saveToLocalStorage([...tasks, newTask]);
                setTasks((current) => {
                  return [...current, newTask];
                });
                setTaskDescription("");
                _taskModalRef.current.close();
              }}
              className="closeModal"
            >
              Add
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
