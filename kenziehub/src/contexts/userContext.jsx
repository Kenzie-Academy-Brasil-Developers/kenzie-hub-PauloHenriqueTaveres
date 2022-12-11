import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  function submitLogin(data) {
    const notifyErrLogin = (err) => {
      toast.error(`Falha no login`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };

    const notifySucessLogin = (res) =>
      toast.success(`Login com suscesso`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    api
      .post("/sessions", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("UserToken", res.data.token);
        window.localStorage.setItem("UserId", res.data.user.id);
        setTimeout(() => navigate("/landing"), 3000);
        addUserInfo(res.data.user);
        notifySucessLogin(res);
      })
      .catch((err) => {
        if (err) {
          notifyErrLogin(err);
        }
      });
  }

  function submitRegister(data) {
    const notifyErrRegister = () => {
      toast.error("Erro no cadastro", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };

    const notifySucessRegister = () =>
      toast.success("Cadastro feito com suscesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    console.log(data);
    api
      .post("/users", data)
      .then((res) => {
        notifySucessRegister();
        setTimeout(() => navigate("/"), 3000);
      })
      .catch((err) => {
        if (err) {
          notifyErrRegister();
        }
      });
  }

  const navigate = useNavigate();

  const [technoData, setTechnoData] = useState([
    {
      id: "42dc2396-6ed7-4c44-a8ed-8962e4d6980f",
      title: "React",
      status: "Avançado",
      created_at: "2022-12-08T16:18:51.958Z",
      updated_at: "2022-12-08T16:18:51.958Z",
    },
  ]);

  const [userInfos, setUserInfos] = useState({});

  function addUserInfo(data) {
    setTechnoData(data.techs);
    setUserInfos(data);
  }
  function removeUserInfo() {
    setUserInfos({});
    setTechnoData([{}]);
  }
  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    if (userId === null) {
      navigate("/");
    } else {
      api
        .get(`/users/${userId}`)
        .then((res) => {
          addUserInfo(res.data);
        })
        .catch((err) => {
          if (err) {
            // console.log(err);
            removeUserInfo();
            localStorage.clear();
            navigate("/");
          }
        });

      navigate("/landing", 3000);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfos,
        addUserInfo,
        removeUserInfo,
        technoData,
        setTechnoData,
        submitLogin,
        submitRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
