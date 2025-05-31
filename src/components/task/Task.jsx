import { useLocation } from "react-router-dom";
import AddTaskModal from "./AddTaskModal.jsx";
import "../../styles/utils.css";
import "./tasks.css";
import { useContext, useState } from "react";
import TaskContext from "../../context/TaskContext.js";

export function Task() {
  const { tasks, setTasks } = useContext(TaskContext);
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
  return (
    <>
      <div className="task-manager">
        <h1 className="center-text">Task Manager</h1>

        <div className="tasks">
          <div className="tasks__header">
            <button
              onClick={() => {
                document.getElementById("task-modal").showModal();
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
                      <b>{task.title}</b>
                    </span>
                  </div>
                  <div className="task__child task__actions">
                    <button className="edit">Edit</button>
                    <button
                      onClick={() =>
                        setTasks((pre) => pre.filter((p) => p.id !== task.id))
                      }
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

      <AddTaskModal />
    </>
  );
}
