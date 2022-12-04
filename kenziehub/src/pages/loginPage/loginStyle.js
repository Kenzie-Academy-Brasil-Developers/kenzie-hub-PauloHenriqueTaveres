import styled from "styled-components";

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--Grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoginForm = styled.form`
  min-width: 350px;
  min-height: 540px;
  background-color: var(--Grey-3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

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
    height: 45px;
    width: 90%;
    border: 1px solid var(--Grey-0);
    background-color: var(--Grey-2);
    border-radius: 4px;
    color: var(--Grey-0);
  }
  @media (min-width: 800px) {
    & {
      width: 400px;
      height: 600px;
    }
  }
`;

export const LoginButton = styled.button`
  width: 92%;
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

export const RedirectRegisterButtom = styled.button`
  width: 92.5%;
  height: 40px;
  background-color: var(--Grey-1);
  border: solid transparent;
  color: var(--Grey-0);
  border-radius: 4px;
  font-size: 15px;
`;
