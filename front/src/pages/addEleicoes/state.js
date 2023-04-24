import { useEffect } from "react";
import { useAppState } from "../../hooks/useAppState";
import { candidateService, voterService } from "../../services";

export const useAddEleicoes = () => {
  const tipo = useAppState();
  const candidatos = useAppState();
  const eleitores = useAppState();
  const eleitoresData = useAppState([]);
  const candidatosData = useAppState([]);

  const getAllCandidato = async () => {
    const response = await candidateService.getAll();

    if (response?.status == 200) {
      candidatosData.setValue(
        response?.data?.map((e) => ({
          ...e,
          label: `${e?.nome} ${e?.sobrenome}`,
          value: e?.id,
        }))
      );
    }
  };

  const getAllElitores = async () => {
    const response = await voterService.getAll();

    if (response?.status == 200) {
      eleitoresData.setValue(
        response?.data?.map((e) => ({
          ...e,
          label: `${e?.nome} ${e?.sobrenome}`,
          value: e?.id,
        }))
      );
    }
  };

  const isValidForm = () => {};

  const handleSave = async () => {};

  useEffect(() => {
    getAllElitores();
    getAllCandidato();
  }, []);

  return {
    tipo,
    eleitores,
    candidatos,
    eleitoresData,
    candidatosData,
    handleSave,
  };
};
