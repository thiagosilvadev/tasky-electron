import React from "react";

const Context = React.createContext();

export default function TasksContext({ children }) {
  const [input, setInput] = React.useState("");
  const [inputError, setInputError] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  return (
    <Context.Provider
      value={{ input, setInput, tasks, setTasks, inputError, setInputError }}
    >
      {children}
    </Context.Provider>
  );
}

export function useInput() {
  const { input, setInput, inputError, setInputError } = React.useContext(
    Context
  );

  return { input, setInput, inputError, setInputError };
}
export function useTask() {
  const { tasks, setTasks } = React.useContext(Context);

  function doneTask(id) {
    let newTasks = [];

    tasks.map((task) => {
      if (task.id == id) {
        task.done = !task.done;
      }
      newTasks.push(task);
    });
    setTasks(newTasks);
  }
  function deleteTask(id) {
    let newTasks = [];
    console.log(tasks);
    if (tasks.length == 1) {
      localStorage.removeItem("tasks");
      setTasks(newTasks);
      return;
    }
    tasks.map((task) => {
      if (task.id == id) {
        console.log(tasks.length);
        return;
      } else {
        newTasks.push(task);
      }
    });
    setTasks(newTasks);
  }
  React.useEffect(() => {
    const localTasks = localStorage.getItem("tasks");

    console.log(localTasks);
    if (localTasks !== null) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  React.useEffect(() => {
    if (tasks.length < 1) {
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return { tasks, setTasks, deleteTask, doneTask };
}
