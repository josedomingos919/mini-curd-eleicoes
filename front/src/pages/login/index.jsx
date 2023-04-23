import { Input } from "reactstrap";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const Login = () => {
  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Login" />
        <Input className="x-input" type="number" placeholder="Telefone" />
        <Input className="x-input mt-13" type="password" placeholder="Senha" />
        <S.TextForgetPassword>Esqueci minha senha</S.TextForgetPassword>
        <Button title="Entrar" />
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
