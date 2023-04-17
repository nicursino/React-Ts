import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ResultadoMegaSena, ResultadoLotoFacil } from "../types/LoteriasTypes";

interface LoteriasContextData {
  ultimoResultadoMegaSena: ResultadoMegaSena | null;
  ultimoResultadoLotoFacil: ResultadoLotoFacil | null;
  lotofacil:ResultadoLotoFacil | null;
  carregando: boolean;
  erro: boolean;
}

interface lotteriesData {
  megasena: ResultadoMegaSena | null;
  lotofacil: ResultadoLotoFacil | null;
}

export const LoteriasContext = createContext<LoteriasContextData>({
  ultimoResultadoMegaSena: null,
  ultimoResultadoLotoFacil: null,
  lotofacil: null,
  carregando: false,
  erro: false,
});

interface LoteriasProviderProps {
  children: React.ReactNode;
}

const LoteriasProvider: React.FC<LoteriasProviderProps> = ({ children }) => {
  const [ultimoResultadoMegaSena, setUltimoResultadoMegaSena] =
    useState<ResultadoMegaSena | null>(null);
  const [ultimoResultadoLotoFacil, setUltimoResultadoLotoFacil] =
    useState<ResultadoLotoFacil | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [lotofacil, setLotofacil] = useState<ResultadoLotoFacil | null>(null);

  useEffect(() => {
    async function carregaResultados() {
      try {
        const resMegaSena = await axios.get(
          "https://servicebus2.caixa.gov.br/portaldeloterias/api/v1/loterias/1900/draws/latest"
        );
        setUltimoResultadoMegaSena(resMegaSena.data.data[0]);

        const resLotoFacil = await axios.get(
          "https://servicebus2.caixa.gov.br/portaldeloterias/api/v1/loterias/2102/draws/latest"
        );
        setUltimoResultadoLotoFacil(resLotoFacil.data.data[0]);
        setLotofacil(resLotoFacil.data.data[0]);

        setCarregando(false);
      } catch (error) {
        setErro(true);
        setCarregando(false);
        console.log(error);
      }
    }

    carregaResultados();
  }, []);

  return (
    <LoteriasContext.Provider
      value={{
        ultimoResultadoMegaSena,
        ultimoResultadoLotoFacil,
        lotofacil,
        carregando,
        erro,
      }}
    >
      {children}
    </LoteriasContext.Provider>
  );
};

export default LoteriasProvider;
