import { useContexto } from "../../hooks";

function Lotofacil(){

    const {lotofacil} = useContexto();
    return (    
        <div id = "homebody"> 
            <hr/>
            <table>
                <tr id="linha">
                    <td> <td className="primeiraColuna"><img src={require('../../assets/trevo-lotofacil.png')} /></td><td><strong id="tituloLOTO">LOTOFÁCIL</strong></td></td>
                    <td>
                    {[...Array(15)].map((_, index) => (
                    <>
                    {index % 5 === 0 && <tr key={index / 5} />}
                    <td
                        key={index}
                        id="dezenasLF"
                        style={{
                        borderBottom: index < 10 ? "1px solid purple" : undefined
                        }}
                    >
                        <label id="labelDezenasLF">{lotofacil.dezenas[index]}</label>
                    </td>
                    </>
                ))}
          </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td id="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}:</td>
                </td>
                    <td id="acumulado"><h1>{lotofacil.acumulado ? "ACUMULOU!": lotofacil.quantidadeGanhadores+" GANHADORES"}</h1></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td id="tituloLOTO"> R$ {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}</td>
                </tr>
           </table>
           <hr></hr>
        </div>
    )
}

export default Lotofacil;

