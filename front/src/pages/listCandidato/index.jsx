import { Table, Button as RAButton } from "reactstrap";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const ListCandidato = () => {
  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Listar Candidatos" />
        <Table style={{ marginBottom: 25 }} striped>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
              <th>BI</th>
              <th>Eliminar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rest</td>
              <td>Mark</td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <RAButton color="danger">Eliminar</RAButton>
              </td>
              <td>
                <RAButton>Editar</RAButton>
              </td>
            </tr>
            <tr>
              <td>Rest</td>
              <td>Mark</td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <RAButton color="danger">Eliminar</RAButton>
              </td>
              <td>
                <RAButton>Editar</RAButton>
              </td>
            </tr>
            <tr>
              <td>Rest</td>
              <td>Mark</td>
              <td>
                <a href="">vizualizar</a>
              </td>
              <td>
                <RAButton color="danger">Eliminar</RAButton>
              </td>
              <td>
                <RAButton>Editar</RAButton>
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
