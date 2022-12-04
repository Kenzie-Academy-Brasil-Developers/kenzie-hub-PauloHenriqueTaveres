import styled from "styled-components";

export const Register = styled.div`
  width: 100%;
  height: max-content;
  background-color: var(--Grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;
  overflow-y: scroll;

  .logoConteiner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 350px;
    margin-top: 60px;

    button {
      width: 80px;
      height: 32px;
      background-color: var(--Grey-3);
      color: var(--White);
      border: solid transparent;
      border-radius: 6px;
    }
  }

  @media (min-width: 800px) {
    justify-content: center;
  }
`;

export const RegisterForm = styled.form`
  min-width: 350px;
  min-height: 1200px;
  background-color: var(--Grey-3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 50px;

  h3 {
    font-weight: 700;
    font-size: 15px;
    color: var(--Grey-0);
  }
  span {
    font-size: 11px;
    font-weight: 600;
    color: var(--Grey-1);
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--Grey-0);

    width: 90%;
  }

  input {
    position: relative;
    right: 4px;
    height: 45px;
    width: 90%;

    background-color: var(--Grey-2);
    border: 1px solid transparent;
    border-radius: 4px;
    color: var(--Grey-0);

    &:hover {
      border: 1px solid var(--Grey-0);
    }
  }

  select {
    position: relative;
    right: 4px;
    height: 49px;
    width: 90%;
    border: 1px solid transparent;
    background-color: var(--Grey-2);
    border-radius: 4px;
    color: var(--Grey-0);

    &:hover {
      border: 1px solid var(--Grey-0);
    }
  }
  @media (min-width: 800px) {
    & {
      width: 400px;
      height: 600px;
    }
  }
`;

export const RegisterButton = styled.button`
  width: 92.5%;
  height: 40px;
  background-color: var(--Color-primary);
  border: solid transparent;
  color: var(--Grey-0);
  border-radius: 4px;
  font-size: 15px;

  &:hover {
    transition: 0.3s;
    background-color: var(--Color-primary-Focus);
  }
`;
