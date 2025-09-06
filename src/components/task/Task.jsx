import { useNavigate } from "react-router-dom";
import TaskModal, { taskModalRef } from "./TaskModal.jsx";
import "../../styles/utils.css";
import "./tasks.css";
import { useContext, useEffect, useState } from "react";
import TaskContext from "../../context/TaskContext.js";
import { saveToLocalStorage } from "./hook/useGetTasks.js";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// import WelcomeNoTask from "../welcome/WelcomeNoTask.jsx";

export function Task() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [edit, setEdit] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (tasks.length <= 0) {
      navigate("/");
    }
    if (edit) {
      taskModalRef.current.showModal();
    }
  }, [tasks.length, navigate, edit]);
  // console.log(tasks);

  function getRandomColor() {
    const colors = [
      "#1e1e1e", // almost black
      "#2c3e50", // dark blue-gray
      "#34495e", // muted navy
      "#2f4f4f", // dark slate gray
      "#4b0082", // indigo
      "#800000", // maroon
      "#0f3057", // deep sea blue
      "#6a0dad", // royal purple
      "#003366", // deep blue
      "#3b3b3b", // charcoal
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  // console.log(taskModalRef);
  return (
    <>
      <TaskModal edit={edit} />
      <div className="task-manager">
        <h1 className="center-text">Task Manager</h1>

        <div className="tasks">
          <div className="tasks__header">
            <button
              onClick={() => {
                setEdit(undefined);
                taskModalRef.current.showModal();
              }}
            >
              Add Task
            </button>
          </div>

          <div className="tasks__body">
            {tasks.map((task) => {
              return (
                <div key={task.id} className={"task"}>
                  <div
                    style={{
                      backgroundColor: getRandomColor(),
                      borderRadius: "3px",
                      boxShadow: "0 2px 4px #4449",
                    }}
                    className="task__child month-date-cont"
                  >
                    <span className="month">{task.date.split(" ")[1]}</span>
                    <span className="date">{task.date.split(" ")[2]}</span>
                  </div>
                  <div className="task__child task__title">
                    <span className="task__title-p truncate-1">
                      {task.title}
                    </span>
                    <time time={task.dateOBJ.toLocaleTimeString()}>
                      {task.dateOBJ.toLocaleTimeString()}
                    </time>
                  </div>
                  <div className="task__child task__actions">
                    <button
                      className="edit"
                      onClick={() => {
                        // setEdit(undefined);
                        setEdit(() => ({ edit: true, id: task.id }));
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => {
                        setEdit(undefined);
                        saveToLocalStorage(
                          tasks.filter((tk) => tk.id !== task.id)
                        );
                        setTasks((current) =>
                          current.filter((tk) => tk.id !== task.id)
                        );
                      }}
                      className="delete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
