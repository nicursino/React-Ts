import Quinia from "../components/Quina/Quina";
import Menu from "../components/Menu/Menu";
import { useContexto } from "../hooks";

function Quina(){
    const { quina } = useContexto();
    return ( 
        quina.numeroDoConcurso ?
        <>

        <div> <Menu /></div>
        <div> <Quinia /> </div>

        </>
        :
        <div> Carregando... </div>
    );
}

export default Quina;