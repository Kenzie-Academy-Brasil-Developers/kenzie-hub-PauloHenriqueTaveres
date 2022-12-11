import styled from "styled-components";

export const BackgroudEditRemoveModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormEditRemoveTech = styled.form`
  width: 90%;
  max-width: 370px;
  height: 342px;
  background-color: var(--Grey-3);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    width: 370px;
  }
`;
export const TechEditRemoveHeader = styled.div`
  border-radius: 4px 4px 0px 0px;
  background-color: var(--Grey-2);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;

  p {
    margin-left: 20px;
    color: var(--Grey-0);
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
  }
  button {
    margin-right: 20px;
    background-color: transparent;
    color: var(--Grey-1);
    border: 0px solid transparent;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    cursor: pointer;
  }
`;

export const EditRemoveTechInputs = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    height: 45px;
    width: 98.3%;
    border: 1px solid var(--Grey-0);
    background-color: var(--Grey-2);
    border-radius: 4px;
    color: var(--Grey-0);
  }

  select {
    height: 49px;
    width: 100%;
    border: 1px solid var(--Grey-0);
    background-color: var(--Grey-2);
    border-radius: 4px;
    color: var(--Grey-0);
  }
  span {
    margin-top: 15px;
    color: var(--Grey-0);
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ConteinerButtons = styled.div`
  width: 90%;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const ButtonTechEdit = styled.button`
  border: solid transparent;
  background-color: var(--Color-primary);
  width: 55%;
  height: 50px;
  border-radius: 4px;
  color: var(--Grey-0);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: var(--Color-primary-Focus);
  }
`;
export const ButtonRemove = styled.button`
  border: solid transparent;
  background-color: var(--Grey-1);
  width: 35%;
  height: 50px;
  border-radius: 4px;
  color: var(--Grey-0);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
