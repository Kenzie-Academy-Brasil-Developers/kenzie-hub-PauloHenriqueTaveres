import { useContext } from "react";
import { TechnoContext } from "../../../contexts/technoContext";
import { LiTechnoConteiner } from "./liTechnoStyle";

export const LiTechno = ({ element }) => {
  const { setModalRemoveEditTechno, setLiData, liData } =
    useContext(TechnoContext);

  return (
    <LiTechnoConteiner
      onClick={() => {
        setModalRemoveEditTechno(true);
        setLiData(element);
        console.log(liData);
      }}
    >
      <p>{element.title}</p>
      <span>{element.status}</span>
    </LiTechnoConteiner>
  );
};
