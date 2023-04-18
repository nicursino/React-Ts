import { useContext } from "react";
import { Contexto } from "../contexts/LoteriasContext";

function useContexto() {
    const contexto = useContext(Contexto);
    return contexto;
}

export default useContexto;