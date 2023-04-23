import { Logo, CardTitle, Button, MiniFooter } from "../../components";
import { Input } from "reactstrap";

import * as S from "./styles";

export const AddEleitor = () => {
  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Criar Eleitor" />
        <S.ElementContainer>
          <label>Nome:</label>
          <Input />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>Apelido:</label>
          <Input />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>BI:</label>
          <Input />
        </S.ElementContainer>
        <S.Footer>
          <Button title="Salvar" />
          <Button
            title="Voltar"
            onClick={() => (location.href = "/menu-cne")}
          />
        </S.Footer>
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
