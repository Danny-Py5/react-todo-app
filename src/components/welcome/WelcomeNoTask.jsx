import { useEffect, useRef } from "react";
import "./welcome-styles.css";
import TaskModal from "../task/TaskModal.jsx";
// import { useNavigate } from "react-router-dom";

export default function WelcomeNoTask() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="welcome">
        <div className="welcome-body">
          <p>
            <strong>There is no Task in your list</strong>
          </p>
          <p>Press the plus button to add task</p>
          <button
            onClick={() => {
              document.getElementById("task-modal").showModal();
              // navigate("/task");
            }}
            className="addTask"
          >
            +
          </button>
        </div>
      </div>

      <TaskModal />
    </>
  );
}
