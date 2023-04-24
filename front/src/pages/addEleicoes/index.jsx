import { Logo, CardTitle, Button, MiniFooter } from "../../components";
import { electionTypes } from "../../util/data/electionTypes";
import { useAddEleicoes } from "./state";

import * as S from "./styles";

import Select from "react-select";

export const AddEleicoes = () => {
  const {
    candidatos,
    eleitores,
    eleitoresData,
    candidatosData,
    tipo,
    handleSave,
  } = useAddEleicoes();

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Criar Eleição" />
        <S.ElementContainer>
          <label>Tipo de eleição:</label>
          <Select
            options={electionTypes}
            value={tipo.value}
            onChange={tipo.setValue}
            placeholder=""
          />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>Candidatos:</label>
          <Select
            isMulti={true}
            value={candidatos.value}
            onChange={candidatos.setValue}
            options={candidatosData?.value}
            placeholder=""
          />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>Eleitores:</label>
          <Select
            isMulti={true}
            value={eleitores.value}
            onChange={eleitores.setValue}
            options={eleitoresData?.value}
            placeholder=""
          />
        </S.ElementContainer>
        <S.Footer>
          <Button title="Salvar" onClick={handleSave} />
          <Button title="Voltar" onClick={() => history.go(-1)} />
        </S.Footer>
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
