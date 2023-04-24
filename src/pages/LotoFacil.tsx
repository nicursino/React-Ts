import Lotofacil from "../components/Lotofacil/Lotofacil";
import Menu from "../components/Menu/Menu";
import { useContexto } from "../hooks";

function LotoFacil(){
    const { lotofacil } = useContexto();
    return ( 
        lotofacil.numeroDoConcurso ?
        <>
        
        <div> <Menu /></div>
        <div> <Lotofacil /> </div>

        </>
        :
        <div> Carregando... </div>
    );
}

export default LotoFacil;