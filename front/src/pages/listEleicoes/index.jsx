import { Input, Table, Button as RAButton } from "reactstrap";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const ListEleicoes = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <RAButton color="danger">Encerrar</RAButton>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <RAButton color="danger">Encerrar</RAButton>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <RAButton color="danger">Encerrar</RAButton>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button title="Voltar" onClick={() => history.go(-1)} />
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
