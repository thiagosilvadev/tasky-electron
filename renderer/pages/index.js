import React from "react";

import FormTask from "../components/FormTask/FormTask";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";
import { Container, Main } from "../components/utilsStyles";
import { useTask } from "../context/TasksContext";

const Home = () => {
  const { tasks } = useTask();
  return (
    <Container>
      <Header />
      <Main>
        <FormTask />
        <Tasks />
      </Main>

      <p>Você tem o total de {tasks.length} tasks</p>
    </Container>
  );
};

export default Home;
