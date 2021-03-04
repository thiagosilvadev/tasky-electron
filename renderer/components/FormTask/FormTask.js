import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useInput, useTask } from "../../context/TasksContext";
import { Button, Form, Input } from "./style";
import idGenerator from "../../utils/idGenerator";

export default function FormTask() {
  const { setTasks } = useTask();
  const { input, setInput, inputError, setInputError } = useInput();

  function handleInput({ target }) {
    setInput(target.value);
  }
  function checkInput() {
    if (inputError && input != "") {
      setInputError(false);
    }
  }

  function handleTask(e) {
    e.preventDefault();
    if (input == "") {
      setInputError(true);
    } else {
      setTasks((tasks) => [
        { nome: input, id: idGenerator(tasks), done: false },
        ...tasks,
      ]);
    }
  }
  return (
    <>
      <Form onSubmit={handleTask}>
        <Input
          value={input}
          onChange={handleInput}
          onKeyUp={checkInput}
          placeholder="Nova Tarefa"
          style={{
            borderColor: inputError && "#B83B5E",
          }}
        />
        <Button
          style={{
            borderColor: inputError && "#B83B5E",
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "14px" }} icon={faPlus} />
        </Button>
      </Form>
      {inputError && <p style={{ marginTop: "10px" }}>Digite uma tarefa</p>}
    </>
  );
}
