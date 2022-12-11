import styled from "styled-components";

export const Landing = styled.div`
  background-color: var(--Grey-4);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
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
  border-bottom: 2px solid var(--Grey-3);
  border-top: 2px solid var(--Grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  div {
    width: 90%;
    p {
      font-size: 18px;
      font-weight: 700;
      color: var(--Grey-0);
    }

    span {
      font-size: 12px;
      font-weight: 600;
      color: var(--Grey-1);
    }
  }
`;

export const TechnologiesConteiner = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  gap: 28px;

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: 600;
      line-height: 18px;
      color: var(--Grey-0);
    }
    button {
      width: 33px;
      height: 32px;
      border-radius: 4px;
      background-color: var(--Grey-3);
      color: var(--Grey-0);
      border: solid transparent;
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

export const UlTechnologies = styled.ul`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
  margin-top: 22px;
`;

export const TechnoConteiner = styled.section`
  width: 90%;
  height: max-content;
  background-color: var(--Grey-3);
  margin-bottom: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
