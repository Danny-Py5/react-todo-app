const tasks = [
  {
    date: new Date().toDateString(),
    title: "Eat by 4pm",
    dateOBJ: new Date(),
    id: 1,
  },
  {
    date: new Date().toDateString(),
    title: "Visit my sister",
    dateOBJ: new Date(),
    id: 2,
  },
  {
    date: new Date().toDateString(),
    title: "Finish my code",
    dateOBJ: new Date(),
    id: 3,
  },
];

export default function useGetTasks() {
  // return tasks;
  return JSON.parse(localStorage.getItem("tasks"), (key, value) => {
    if (key === "dateOBJ") {
      return new Date(value);
    }
    return value;
  });
}

export function saveToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("tasks saved!");
}
