import { useEffect } from "react";
import { useAppState } from "../../hooks/useAppState";
import { voterService } from "../../services";

export const useListEleitor = () => {
  const voters = useAppState([]);

  const getVoters = async () => {
    const response = await voterService.getAll();

    if (response?.status == 200) voters.setValue(response?.data);
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que pretende eliminar um item ?")) return;

    const response = await voterService.remove(id);

    if (response?.status == 200) {
      alert("Eleitor eliminado com sucesso!");

      getVoters();
    } else {
      alert("Erro: Falha ao eliminar o eleitor!");
    }
  };

  useEffect(() => {
    getVoters();
  }, []);

  return { voters, handleDelete };
};
