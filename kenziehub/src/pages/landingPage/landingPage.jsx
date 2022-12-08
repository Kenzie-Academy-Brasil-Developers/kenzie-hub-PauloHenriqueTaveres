import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../contexts/userInfoContext";
import { Logo } from "../../globalComponentes/logo";
import { Landing, LandingDivLogo, LineComponente } from "./landingStyled";

export const LandingPage = () => {
  const { userInfos, removeUserInfo } = useContext(UserInfoContext);

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
        <p>{userInfos.data.user.name}</p>
        <span>{userInfos.data.user.course_module}</span>
      </LineComponente>
    </Landing>
  );
};
