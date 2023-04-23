import { useApp } from "../../context";
import { userService } from "../../services";
import { useAppState } from "../../hooks/useAppState";
import { useNavigate } from "react-router-dom";

export const useLoginState = () => {
  const { setUser } = useApp();

  const phone = useAppState("");
  const password = useAppState("");

  const navigate = useNavigate();

  const isValidForm = () => {
    if (!phone?.value) {
      alert("ATENÇÃO: Campo telefone é obrigatório!");
      return false;
    }

    if (!password?.value) {
      alert("ATENÇÃO: Campo senha é obrogatório!");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!isValidForm()) return;

    const response = await userService.login({
      phone: phone?.value,
      password: password?.value,
    });

    if (response?.status == 201) {
      localStorage.setItem("user", JSON.stringify(response?.data));

      setUser(response?.data);

      navigate("/menu-cne");
    } else {
      alert("ERRO: Falha ao realizar login, tente novamente mais tarde!");
    }
  };

  return { phone, password, handleLogin };
};
