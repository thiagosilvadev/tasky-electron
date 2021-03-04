import React from "react";
import { Task, Wrapper, Buttons } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTask } from "../../context/TasksContext";
import { done, undone } from "../../utils/taskTheme";
export default function Tasks() {
  const { tasks, doneTask, deleteTask } = useTask();

  return (
    <Wrapper>
      {tasks &&
        tasks.map((task) => {
          let style = task.done ? done : undone;
          return (
            <Task style={style} key={task.id}>
              {task.nome}
              <Buttons>
                <button onClick={() => doneTask(task.id)}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button onClick={() => deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </Buttons>
            </Task>
          );
        })}
    </Wrapper>
  );
}
