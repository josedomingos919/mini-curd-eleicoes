import { Input, Table, Button as RAButton } from "reactstrap";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";
import { useEffect, useState } from "react";
import { electionService } from "../../services";
import { electionTypes } from "../../util/data/electionTypes";

export const ListEleicoes = () => {
  const [elecoes, setElecoes] = useState([]);

  const init = async () => {
    const response = await electionService.getAll();

    setElecoes(response?.data || []);
  };

  console.log({ elecoes });

  useEffect(() => {
    init();
  }, []);

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
                  <a href="">vizualizar</a>
                </td>
                <td>
                  <a href="">vizualizar</a>
                </td>
                <td>
                  <RAButton color="danger">Encerrar</RAButton>
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
