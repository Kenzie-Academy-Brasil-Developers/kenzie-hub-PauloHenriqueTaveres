import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "./../services/api";
export const TechnoContext = createContext({});

export const TechnoProvider = ({ children }) => {
  const [modalAddTechno, setModalAddTechno] = useState(false);
  const [modalRemoveEditTechno, setModalRemoveEditTechno] = useState(false);
  const [liData, setLiData] = useState({});

  const Token = localStorage.getItem("UserToken");
  function onSubmitRegisTech(data) {
    const notifyErrRegisTech = () => {
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
    const notifySucessRegisTech = () =>
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
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        console.log(res);
        notifySucessRegisTech();
      })
      .catch((err) => {
        notifyErrRegisTech();
        console.log(err);
      });
  }

  function onSubmitEditTech(data) {
    const notifyErrEditTech = () => {
      toast.error("Erro na Atualização", {
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
    const notifySucessEditTech = () =>
      toast.success("Atualização feita com suscesso", {
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
      .put(`/users/techs/${liData.id}`, data, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        console.log(res);
        notifySucessEditTech();
      })
      .catch((err) => {
        notifyErrEditTech();
        console.log(err);
      });
  }

  function onSubmitRemoveTech() {
    const notifyErrRemoveTech = () => {
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
    const notifySucessRemoveTech = () =>
      toast.success("Tecnologia Removida", {
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
      .delete(`/users/techs/${liData.id}`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        notifySucessRemoveTech();
      })
      .catch((err) => {
        notifyErrRemoveTech();
      });
  }
  return (
    <TechnoContext.Provider
      value={{
        setModalAddTechno,
        modalAddTechno,
        onSubmitRegisTech,
        modalRemoveEditTechno,
        setModalRemoveEditTechno,
        liData,
        setLiData,
        onSubmitEditTech,
        onSubmitRemoveTech,
      }}
    >
      {children}
    </TechnoContext.Provider>
  );
};
