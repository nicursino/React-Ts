import React, { useContext } from "react";
import { LoteriasContext } from "../contexts/LoteriasContext";
import "../styles/lotofacil.css";

const Lotofacil: React.FC = () => {
  const { lotofacil } = useContext(LoteriasContext);

  return (
    <div className="lotofacil-container">
      <img
        className="lotofacil-trevo"
        src={require("../assets/trevo-lotofacil.png").default}
        alt="Trevo da Lotofácil"
      />
      <div className="lotofacil-info">
        <h2 className="lotofacil-title">Lotofácil</h2>
        {lotofacil ? (
          <>
            <p>
              Concurso {lotofacil.numero} - {formatarData(lotofacil.dataApuracao)}
            </p>
            <p>{lotofacil.resultadoOrdenado.join(" - ")}</p>
            <p>{lotofacil.ganhadores} ganhadores</p>
            <p>R$ {lotofacil.valorPremio}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default Lotofacil;
function formatarData(dataApuracao: any): React.ReactNode {
  throw new Error("Function not implemented.");
}

