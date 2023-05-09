import { useEffect, useState } from "react";
import { electionService } from "../../services";

export const useListEleicoes = () => {
    const [elecoes, setElecoes] = useState([]);

    const init = async () => {
        const response = await electionService.getAll();

        setElecoes(response?.data || []);
    };

    const handleFinish = async (id) => {
        const response = await electionService.finish(id);

        if (response?.status == 201)
            init()
    }

    useEffect(() => {
        init();
    }, []);


    return { elecoes, setElecoes, handleFinish }
}