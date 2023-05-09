
import { useListEleicoes } from "./state";
import { Table, Button as RAButton } from "reactstrap";
import { electionTypes } from "../../util/data/electionTypes";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const ListEleicoes = () => {
  const { elecoes, handleFinish } = useListEleicoes();

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Listar Eleições" />
        <Table style={{ marginBottom: 25 }} striped>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Tipo</th>
              <th>Candidatos</th>
              <th>Eleitores</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {elecoes.map((e) => (
              <tr>
                <td>{e?.id}</td>
                <td>{electionTypes.find((k) => k.value == e?.tipo)?.label}</td>
                <td>
                  <a href={`/list-candidato/${e?.id}`}>vizualizar</a>
                </td>
                <td>
                  <a href={`/list-eleitor/${e?.id}`}>vizualizar</a>
                </td>
                <td>
                  {e?.finshed == 0 ? <RAButton onClick={() => {
                    handleFinish(e?.id)
                  }} color="danger">Encerrar</RAButton> :
                    <a href="">Vencedor</a>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button title="Voltar" onClick={() => history.go(-1)} />
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
