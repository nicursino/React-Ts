import { useContexto } from "../../hooks";

function Megasena(){

    const {megasena} = useContexto();
    console.log(megasena)
    return (    
        <div id = "homebody"> 
            <table>
                <tr id="linha">
                <td> <td className="primeiraColuna"><img src={require('../../assets/trevo-megasena.png')} /></td><td><strong id="tituloMega">MEGA-SENA</strong></td></td>
                    <td>
                    {megasena.dezenas.map(numero => (
            <><td id="dezenas"><label id="labelDezenas">{numero}</label></td>
            <td id="espacoDezenas"></td></>
          ))}
          </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td id="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {megasena.dataProximoConcurso}:</td>
                </td>
                    <td id="acumulado"><h1>{megasena.acumulado ? "ACUMULOU!": "Não Acumulado"}</h1></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td id="tituloMega"> R$ {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {megasena.numeroDoConcurso} {megasena.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    )
}

export default Megasena;


