import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { TechnoContext } from "../../../contexts/technoContext";
import {
  BackgroudModal,
  ButtonTechRegis,
  FormAddTech,
  RegisTechInpus,
  TechRegisHeader,
} from "./modalAddTechStyle";

export const ModalAddTech = () => {
  const { setModalAddTechno, onSubmitRegisTech } = useContext(TechnoContext);
  const { register, handleSubmit } = useForm();

  return (
    <BackgroudModal>
      <FormAddTech onSubmit={handleSubmit(onSubmitRegisTech)}>
        <TechRegisHeader>
          <p>Cadastrar Tecnologia</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setModalAddTechno(false);
              window.location.reload();
            }}
          >
            X
          </button>
        </TechRegisHeader>
        <RegisTechInpus>
          <span>Nome</span>
          <input
            type="text"
            placeholder="Nome da Tecnologia"
            {...register("title")}
          />
          <span>Selecionar status</span>
          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <ButtonTechRegis type="submit">Cadastrar Tecnologia</ButtonTechRegis>
        </RegisTechInpus>
      </FormAddTech>
      <ToastContainer />
    </BackgroudModal>
  );
};
