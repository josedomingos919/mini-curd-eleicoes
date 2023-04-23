import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

import Select from "react-select";

export const AddEleicoes = () => {
  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Criar Eleição" />
        <S.ElementContainer>
          <label>Tipo de eleição:</label>
          <Select placeholder="" />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>Candidatos:</label>
          <Select placeholder="" />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>Eleitores:</label>
          <Select placeholder="" />
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
