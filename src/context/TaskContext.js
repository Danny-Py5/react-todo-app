import { createContext } from "react";

const TaskContext = createContext({
  date: 0,
  title: "",
  id: 0,
});

export default TaskContext;
