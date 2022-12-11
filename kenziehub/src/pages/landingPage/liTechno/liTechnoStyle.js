import styled from "styled-components";

export const LiTechnoConteiner = styled.li`
  width: 100%;
  height: 50px;
  background-color: var(--Grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transition: 1s;
    background-color: var(--Grey-2);
  }

  p {
    margin-left: 30px;
    font-size: 15px;
    color: var(--Grey-0);
    font-weight: 700;
    line-height: 25px;
  }
  span {
    margin-right: 30px;
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    color: var(--Grey-1);
  }
`;
