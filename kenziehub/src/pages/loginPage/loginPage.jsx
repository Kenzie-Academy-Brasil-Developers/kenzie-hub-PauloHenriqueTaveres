import { Logo } from "../../globalComponentes/logo";
import {
  Login,
  LoginButton,
  LoginForm,
  RedirectRegisterButtom,
} from "./loginStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledParag } from "../../globalComponentes/yupParagStyled";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const LoginPage = () => {
  const { submitLogin } = useContext(UserContext);

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatorio").email("Email inválido"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Login>
      <Logo> Kenzie Hub</Logo>
      <LoginForm onSubmit={handleSubmit(submitLogin)}>
        <h3> Login</h3>
        <p>Email</p>
        <input
          placeholder="Digite o Email"
          type="email"
          {...register("email")}
        />
        {errors.email && <StyledParag>{errors.email.message}</StyledParag>}
        <p>Senha</p>
        <input
          placeholder="Digite a Senha"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <StyledParag>{errors.password.message}</StyledParag>
        )}
        <LoginButton type="submit">Entrar</LoginButton>
        <span>Ainda não possui uma conta?</span>
        <RedirectRegisterButtom
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Cadastre-se
        </RedirectRegisterButtom>
      </LoginForm>
      <ToastContainer />
    </Login>
  );
};
