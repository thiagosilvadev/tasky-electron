import React from "react";
import { Wrapper } from "./style";
import Logo from "../Logo/Logo";
export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <p>O seu app de tarefas</p>
    </Wrapper>
  );
}
