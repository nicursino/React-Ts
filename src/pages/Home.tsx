import Megasena from "../components/MegaSena/MegaSena";
import Lotofacil from "../components/Lotofacil/Lotofacil";
import { useContexto } from "../hooks";
import "../css/estilo.css";
import Menu from "../components/Menu/Menu";

function Principal() {
    const { megasena, lotofacil } = useContexto();
    return (
        <>
            {megasena.numeroDoConcurso || lotofacil.numeroDoConcurso ?
                <>

                <div> <Menu /></div>
                <div> <Megasena /> </div>
                <div> <Lotofacil /></div>
                
                </>
                :
                <div> Carregando... </div>
            }
        </>
    )
}

export default Principal;
