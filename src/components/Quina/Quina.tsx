import { useContexto } from "../../hooks";

function Quinia(){

    const {quina} = useContexto();
    console.log(quina)
    return (    
        <div id = "homebody"> 
            <table>
                <tr id="linha">
                <td> <td className="primeiraColuna"><img src={require('../../assets/trevo-quina.png')} /></td><td><strong id="tituloQUINA">QUINA</strong></td></td>
                    <td>
                    {quina.dezenas.map(numero => (
            <><td id="dezenasQUINA"><label id="labelDezenasQUINA">{numero}</label></td>
            <td id="espacoDezenas"></td></>
          ))}
          </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td id="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}:</td>
                </td>
                    <td id="acumulado"><h1>{quina.acumulado ? "ACUMULOU!": "Não Acumulado"}</h1></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td id="tituloQUINA"> R$ {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    )
}

export default Quinia;