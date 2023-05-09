import { useMenuCNEState } from "./state";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Logo, CardTitle, Button, MiniFooter } from "../../components";

import * as S from "./styles";

export const MenuCNE = () => {
  const { handleLogout } = useMenuCNEState();

  return (
    <S.Container>
      <Logo />
      <S.Form>
        <CardTitle title="Menu CNE" />
        <S.MenuList>
          <ListGroup>
            <ListGroupItem>
              <a href="/add-eleicoes">Criar Eleiçoes</a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="/list-eleicoes">Listar Eleições</a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="/add-candidato">Criar Candidatos</a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="/list-candidato">Listar Candidatos</a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="/add-eleitor">Criar Eleitores</a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="/list-eleitor">Listar Eleitores</a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="/add-votos">Registra Votos</a>
            </ListGroupItem>
          </ListGroup>
        </S.MenuList>
        <Button title="Sair" onClick={handleLogout} />
      </S.Form>
      <MiniFooter title="Aproveite, é simples e sempre será!" />
    </S.Container>
  );
};
