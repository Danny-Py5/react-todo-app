export default function useGetTasks() {
  const tasks = [
    {
      date: new Date().toDateString(),
      title: "Eat by 4pm",
      id: 1,
    },
    {
      date: new Date().toDateString(),
      title: "Visit my sister",
      id: 2,
    },
    {
      date: new Date().toDateString(),
      title: "Finish my code",
      id: 3,
    },
  ];
  return tasks;
}
