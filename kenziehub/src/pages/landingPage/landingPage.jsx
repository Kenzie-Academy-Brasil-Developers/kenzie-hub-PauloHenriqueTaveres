import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TechnoContext } from "../../contexts/technoContext";
import { UserContext } from "../../contexts/userContext";
import { Logo } from "../../globalComponentes/logo";
import {
  TechnologiesConteiner,
  Landing,
  LandingDivLogo,
  LineComponente,
  UlTechnologies,
  TechnoConteiner,
} from "./landingStyled";
import { LiTechno } from "./liTechno/liTechno";
import { ModalAddTech } from "./modalAddTech/modalAddTech";
import { EditRemoveModal } from "./modalRemoveEditTech/modalRETech";

export const LandingPage = () => {
  const { userInfos, removeUserInfo, technoData } = useContext(UserContext);

  const { modalAddTechno, setModalAddTechno, modalRemoveEditTechno } =
    useContext(TechnoContext);

  const navigate = useNavigate();

  function cleanLocalStorage(e) {
    e.preventDefault();
    window.localStorage.clear();
    navigate("/");
    removeUserInfo();
  }

  return (
    <Landing>
      <LandingDivLogo>
        <Logo>Kenzie Hub</Logo>
        <button
          onClick={(e) => {
            cleanLocalStorage(e);
          }}
        >
          Sair
        </button>
      </LandingDivLogo>
      <LineComponente>
        <div>
          <p>{userInfos.name}</p>
          <span>{userInfos.course_module}</span>
        </div>
      </LineComponente>
      <TechnologiesConteiner>
        <div>
          <p>Tecnologias</p>
          <button onClick={() => setModalAddTechno(true)}>+</button>
        </div>
        <TechnoConteiner>
          <UlTechnologies>
            {technoData.map((element, index) => (
              <LiTechno element={element} key={index}></LiTechno>
            ))}
          </UlTechnologies>
        </TechnoConteiner>
      </TechnologiesConteiner>
      {modalAddTechno ? <ModalAddTech /> : null}
      {modalRemoveEditTechno ? <EditRemoveModal /> : null}
    </Landing>
  );
};
