import { useParams } from "react-router-dom";
import { useAppState } from "../../hooks/useAppState";
import { voterService } from "../../services";
import { useEffect } from "react";

export const useAddEleitor = () => {
  const { id } = useParams();

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

  const handleEdit = async () => {
    if (!isValidForm()) return;

    const response = await voterService.update({
      id,
      bi: bi?.value,
      nome: nome?.value,
      sobrenome: sobrenome?.value,
    });

    if (response?.status == 200) {
      alert("Eleitor atualizado com sucesso!");

      history.go(-1);
    } else {
      alert("Erro: Falha ao atualizar o eleitor, tente novamente mais atarde!");
    }
  };

  const getEditUser = async () => {
    const response = await voterService.getOne(id);

    if (response?.status == 200) {
      const voter = response?.data;

      bi.setValue(voter?.bi);
      nome.setValue(voter?.nome);
      sobrenome.setValue(voter?.sobrenome);
    }
  };

  useEffect(() => {
    if (id) getEditUser();
  }, [id]);

  return { id, bi, nome, sobrenome, handleSave, handleEdit };
};
