import { useNavigate } from "react-router-dom";
import TaskModal, { taskModalRef } from "./TaskModal.jsx";
import "../../styles/utils.css";
import "./tasks.css";
import { useContext, useEffect, useState } from "react";
import TaskContext from "../../context/TaskContext.js";
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
                taskModalRef.current.showModal();
              }}
            >
              Add Task
            </button>
          </div>

          <div className="tasks__body">
            {tasks.map((task) => {
              return (
                <div key={task.id} className="task">
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
                    <span>
                      <b className="task__title-p">{task.title}</b>
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
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setEdit(undefined);
                        setTasks((pre) => pre.filter((p) => p.id !== task.id));
                      }}
                      className="delete"
                    >
                      Delete
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
