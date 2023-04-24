import Megasena from "../components/MegaSena/MegaSena";
import Menu from "../components/Menu/Menu";
import { useContexto } from "../hooks";

function MegaSena(){
    const { megasena } = useContexto();
    return ( 
        megasena.numeroDoConcurso ?
        <>

        <div> <Menu /></div>
        <div> <Megasena /> </div>

        </>
        :
        <div> Carregando... </div>
    );
}

export default MegaSena;