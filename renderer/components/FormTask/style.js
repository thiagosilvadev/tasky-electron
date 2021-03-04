import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 1.2rem;
  margin-top: 1rem;
`;
export const Input = styled.input`
  width: 90%;
  border-bottom: 2px solid white;
  padding: 0.4rem;
  color: var(--white);
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  transition: all 150ms ease;
  &::placeholder {
    color: rgba(238, 236, 218, 0.49);
    font-style: italic;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
  }
  &:focus {
    border-color: var(--orange);
    + button {
      border-color: var(--orange);
    }
  }
`;
export const Button = styled.button`
  width: 10%;
  color: white;
  border-bottom: 2px solid white;
  height: 100%;
  padding: 0.4rem;
  transition: all 150ms ease;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: var(--orange);
  }
`;
