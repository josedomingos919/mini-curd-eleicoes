import { Input } from "reactstrap";
import { useAddEleitor } from "./state";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const AddEleitor = () => {
  const { id, bi, nome, sobrenome, handleSave, handleEdit } = useAddEleitor();

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title={id ? "Editar " : "Criar " + "Eleitor"} />
        <S.ElementContainer>
          <label>Nome:</label>
          <Input
            value={nome.value}
            onChange={(e) => nome.setValue(e.target.value)}
          />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>Apelido:</label>
          <Input
            value={sobrenome.value}
            onChange={(e) => sobrenome.setValue(e.target.value)}
          />
        </S.ElementContainer>
        <S.ElementContainer>
          <label>BI:</label>
          <Input
            value={bi.value}
            onChange={(e) => bi.setValue(e.target.value)}
          />
        </S.ElementContainer>
        <S.Footer>
          <Button title="Salvar" onClick={id ? handleEdit : handleSave} />
          <Button title="Voltar" onClick={() => history.go(-1)} />
        </S.Footer>
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
