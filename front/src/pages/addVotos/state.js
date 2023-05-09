import { useEffect } from "react";
import { useAppState } from "../../hooks/useAppState";
import {
  candidateService,
  electionService,
  voterService,
} from "../../services";

export const useAddVotos = () => {
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

  const isValidForm = () => {
    if (!tipo?.value?.value) {
      alert("Campo tipo é obrigatório!");
      return false;
    }

    if (!candidatos?.value?.length) {
      alert("Campo candidatos é obrigatório!");
      return false;
    }

    if (!eleitores?.value?.length) {
      alert("Campo eleitores é obrigatório!");
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!isValidForm()) return;

    const response = await electionService.add({
      finshed: 0,
      tipo: tipo?.value?.value,
      eleitor: eleitores.value.map((e) => ({ eleitorId: e.value })),
      candidatos: candidatos.value.map((e) => ({ candidatoId: e.value })),
    });

    if (response?.status == 201) {
      alert("Eleição criada com sucesso!");

      history.go(-1);
    } else {
      alert("Falha ao criar a elição!");
    }
  };

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
