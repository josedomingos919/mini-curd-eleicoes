import { useAppState } from "../../hooks/useAppState";
import { voterService } from "../../services";

export const useAddEleitor = () => {
  const bi = useAppState();
  const nome = useAppState();
  const sobrenome = useAppState();

  const isValidForm = () => {
    if (!bi?.value) {
      alert("O campo BI é obrigatório!");
      return false;
    }

    if (!nome?.value) {
      alert("O campo sobrenome é obrigatório!");
      return false;
    }

    if (!sobrenome?.value) {
      alert("O campo apelido é obrigatório!");
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!isValidForm()) return;

    const response = await voterService.add({
      bi: bi?.value,
      nome: nome?.value,
      sobrenome: sobrenome?.value,
    });

    if (response?.status == 201) {
      alert("Eleitor criado com sucesso!");

      history.go(-1);
    } else {
      alert("Erro: Falha ao criar o eleitor, tente novamente mais atarde!");
    }
  };

  return { bi, nome, sobrenome, handleSave };
};
