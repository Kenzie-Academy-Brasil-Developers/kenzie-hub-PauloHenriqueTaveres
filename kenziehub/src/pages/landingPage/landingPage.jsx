import { useNavigate } from "react-router-dom";
import { Logo } from "../../globalComponentes/logo";
import { Landing, LandingDivLogo, LineComponente } from "./landingStyled";

export const LandingPage = () => {
  const navigate = useNavigate();

  function cleanLocalStorage(e) {
    e.preventDefault();
    window.localStorage.clear();
    navigate("/");
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
        <p>Olá, Samuel Leão</p>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </LineComponente>
    </Landing>
  );
};
