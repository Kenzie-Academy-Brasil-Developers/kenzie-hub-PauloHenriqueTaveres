import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { TechnoContext } from "../../../contexts/technoContext";
import {
  BackgroudEditRemoveModal,
  ButtonRemove,
  ButtonTechEdit,
  ConteinerButtons,
  EditRemoveTechInputs,
  FormEditRemoveTech,
  TechEditRemoveHeader,
} from "./modalRETechstyle";

export const EditRemoveModal = () => {
  const {
    setModalRemoveEditTechno,
    liData,
    onSubmitEditTech,
    onSubmitRemoveTech,
  } = useContext(TechnoContext);
  const { register, handleSubmit } = useForm();
  return (
    <BackgroudEditRemoveModal>
      <FormEditRemoveTech onSubmit={handleSubmit(onSubmitEditTech)}>
        <TechEditRemoveHeader>
          <p>Tecnologia Detalhes</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setModalRemoveEditTechno(false);
              window.location.reload();
            }}
          >
            X
          </button>
        </TechEditRemoveHeader>
        <EditRemoveTechInputs>
          <span>Nome do projeto</span>
          <input
            type="text"
            placeholder="Material UI"
            defaultValue={liData.title}
            {...register("title")}
            readOnly
          />
          <span>Status</span>

          <select name="" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </EditRemoveTechInputs>
        <ConteinerButtons>
          <ButtonTechEdit type="submit">Salvar alterações</ButtonTechEdit>
          <ButtonRemove
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmitRemoveTech();
            }}
          >
            Excluir
          </ButtonRemove>
        </ConteinerButtons>
      </FormEditRemoveTech>
      <ToastContainer />
    </BackgroudEditRemoveModal>
  );
};
