import { useForm } from "react-hook-form";
import { Logo } from "../../globalComponentes/logo";
import { Register, RegisterButton, RegisterForm } from "./registerStyle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledParag } from "../../globalComponentes/yupParagStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { submitRegister } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    contact: yup.string().required("Contato obrigatorio"),
    bio: yup.string().required("Bio obrigatoria"),
    course_module: yup.string().required("Modulo obrigatorio"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mínimo de oito caracteres, pelo menos uma letra, um número e um símbolo"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <Register>
      <div className="logoConteiner">
        <Logo>Kenzie Hub</Logo>
        <button
          onClick={(e) => {
            navigate("/");
            e.preventDefault();
          }}
        >
          Voltar
        </button>
      </div>
      /
      <RegisterForm onSubmit={handleSubmit(submitRegister)}>
        <h3>Crie sua conta</h3>
        <span>Rapido e grátis, vamos nessa</span>
        <p>Nome</p>
        <input type="text" {...register("name")} />
        {errors.name && <StyledParag>{errors.name.message}</StyledParag>}
        <p>Email</p>
        <input type="email" {...register("email")} />
        {errors.email && <StyledParag>{errors.email.message}</StyledParag>}
        <p>Senha</p>
        <input type="password" {...register("password")} />
        {errors.password && (
          <StyledParag>{errors.password.message}</StyledParag>
        )}
        <p>Confirmar Senha</p>
        <input type="password" />
        <p>Bio</p>
        <input type="text" {...register("bio")} />
        {errors.bio && <StyledParag>{errors.bio.message}</StyledParag>}
        <p>Contato</p>
        <input type="text" {...register("contact")} />
        {errors.contact && <StyledParag>{errors.contact.message}</StyledParag>}
        <p>Selecionar módulo</p>
        <select name="" id="" {...register("course_module")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        {errors.course_module && (
          <StyledParag>{errors.course_module.message}</StyledParag>
        )}
        <RegisterButton type="submit">Cadastrar</RegisterButton>
      </RegisterForm>
      <ToastContainer />
    </Register>
  );
};
