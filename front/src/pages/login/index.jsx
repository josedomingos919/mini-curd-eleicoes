import { Input } from "reactstrap";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";
import { useLoginState } from "./state";

import * as S from "./styles";

export const Login = () => {
  const { password, phone, handleLogin } = useLoginState();

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Login" />
        <Input
          type="number"
          value={phone.value}
          className="x-input"
          placeholder="Telefone"
          onChange={(e) => phone.setValue(e?.target?.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password.value}
          className="x-input mt-13"
          onChange={(e) => password.setValue(e?.target?.value)}
        />
        <S.TextForgetPassword>Esqueci minha senha</S.TextForgetPassword>
        <Button title="Entrar" onClick={handleLogin} />
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
