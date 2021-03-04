import styled from "styled-components";

export const Task = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
  transition: all 250ms;
  animation: criar 250ms ease;
  &:hover {
    opacity: 1;
  }
  p {
    width: 85%;
  }
`;
export const Wrapper = styled.div`
  margin-top: 3rem;
`;
export const Buttons = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    color: var(--white);
    cursor: pointer;
    opacity: 0.5;
    transition: all 250ms;
    &:hover {
      opacity: 1;
    }
  }
`;
