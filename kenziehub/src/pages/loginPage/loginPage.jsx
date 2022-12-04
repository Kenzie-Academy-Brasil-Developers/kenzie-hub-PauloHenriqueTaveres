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
import { api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
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

  function submit(data) {
    console.log(data);

    api
      .post("/sessions", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("UserToken", res.data.token);
        window.localStorage.setItem("UserId", res.data.user.id);
        setTimeout(() => navigate("/landing"), 3000);
        notifySucess(res);
      })
      .catch((err) => {
        if (err) {
          notifyErr(err);
        }
      });
  }

  const notifyErr = (err) => {
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

  const notifySucess = (res) =>
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

  return (
    <Login>
      <Logo> Kenzie Hub</Logo>
      <LoginForm onSubmit={handleSubmit(submit)}>
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
        <RedirectRegisterButtom>Cadastre-se</RedirectRegisterButtom>
      </LoginForm>
      <ToastContainer />
    </Login>
  );
};
