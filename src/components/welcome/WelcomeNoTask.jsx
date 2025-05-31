import { useEffect, useState } from "react";
import "./welcome-styles.css";
import AddTaskModal from "../task/AddTaskModal.jsx";
import { useNavigate } from "react-router-dom";

export default function WelcomeNoTask() {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <div className="welcome-body">
        <p>
          <strong>There is not Task to in your list</strong>
        </p>
        <p>Press the plus button to add task</p>
        <button
          onClick={() => {
            // setAdd((current) => !current);
            navigate("/task");
          }}
          className="addTask"
        >
          +
        </button>
      </div>
    </div>
  );
}
