import { useEffect } from "react";
import { useAppState } from "../../hooks/useAppState";
import { candidateService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

export const useListCandidato = () => {
  const { id } = useParams();
  const voters = useAppState([]);

  const navigate = useNavigate();

  const getVoters = async () => {
    if (id) {
      const response = await candidateService.getByEleicao(id);

      if (response?.status == 200) voters.setValue(response?.data);
    } else {
      const response = await candidateService.getAll();

      if (response?.status == 200) voters.setValue(response?.data);
    }

  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que pretende eliminar um item ?")) return;

    const response = await candidateService.remove(id);

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

  return { voters, handleDelete, navigate };
};
