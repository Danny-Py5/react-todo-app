import "./App.css";
import Header from "./components/header/Header.jsx";
import WelcomeNoTask from "./components/welcome/WelcomeNoTask.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { Task } from "./components/task/Task.jsx";
import TaskContext from "./context/TaskContext.js";

import useGetTasks from "./components/task/hook/useGetTasks.js";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(useGetTasks());
  const navigate = useNavigate();
  // console.log(tasks);

  useEffect(() => {
    if (tasks.length > 0) navigate("/task");
  }, [navigate, tasks.length, tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <>
        <Header />

        <Outlet />
      </>
    </TaskContext.Provider>
  );
}

export default App;
