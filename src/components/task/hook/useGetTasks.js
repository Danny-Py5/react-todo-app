export default function useGetTasks() {
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
  return tasks;
}
