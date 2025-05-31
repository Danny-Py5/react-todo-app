import "./App.css";
import Header from "./components/header/Header.jsx";
import WelcomeNoTask from "./components/welcome/WelcomeNoTask.jsx";
import { Outlet } from "react-router-dom";
import { Task } from "./components/task/Task.jsx";
import TaskContext from "./context/TaskContext.js";

import useGetTasks from "./components/task/hook/useGetTasks.js";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(useGetTasks());
  // console.log(tasks);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <>
        <Header />
        {console.log(tasks)}
        {tasks.length > 0 ? <Task /> : <Outlet />}
        {/* <Outlet /> */}
      </>
    </TaskContext.Provider>
  );
}

export default App;
