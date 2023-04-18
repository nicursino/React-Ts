import Megasena from "../components/MegaSena/MegaSena";
import Lotofacil from "../components/Lotofacil/Lotofacil";
import { useContexto } from "../hooks";
import "../css/estilo.css";

function Principal() {
    const { megasena, lotofacil } = useContexto();
    return (
        <>
            {megasena.numeroDoConcurso || lotofacil.numeroDoConcurso ?
                <>
                <div> <Megasena /> </div>
                <div><Lotofacil /></div>
                </>
                :
                <div> Carregando... </div>
            }
        </>
    )
}

export default Principal;
