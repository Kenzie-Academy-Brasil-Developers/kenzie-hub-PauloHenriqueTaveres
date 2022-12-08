import styled from "styled-components";

export const Landing = styled.div`
  background-color: var(--Grey-4);
  width: 100%;
  height: 100vh;
`;

export const LandingDivLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 350px;
  height: 80px;
  button {
    width: 56px;
    height: 32px;
    background-color: var(--Grey-3);
    color: var(--White);
    border: solid transparent;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const LineComponente = styled.div`
  width: 100%;
  height: 131px;
  border-bottom: 1px solid var(--Grey-3);
  border-top: 1px solid var(--Grey-3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  p {
    font-size: 18px;
    font-weight: 700;
    color: var(--Grey-0);
    position: relative;
    left: 20px;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--Grey-1);
    position: relative;
    left: 20px;
  }
`;
