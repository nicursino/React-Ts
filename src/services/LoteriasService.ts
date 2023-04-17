import axios from 'axios';

const baseUrl = 'https://servicebus2.caixa.gov.br/portaldeloterias/api';

interface SorteioResponse {
  data: string;
  numero: number;
  cidade: string;
  local: string;
  valor_acumulado: number;
  dezenas: number[];
}

export interface MegaSenaResponse {
  concurso: number;
  data: string;
  sorteio: SorteioResponse;
}

export interface LotofacilResponse {
  concurso: number;
  data: string;
  sorteio: {
    localSorteio: string;
    cidade: string;
    timeinMilliSeconds: number;
    dezenas: number[];
    premiacao: {
      acertos: number;
      ganhadores: number;
      valor: number;
    }[];
  };
}

export const LoteriasService = {
  async getUltimoResultadoMegaSena(): Promise<MegaSenaResponse> {
    const response = await axios.get<MegaSenaResponse>(
      `${baseUrl}/resultado/ultimo/Megasena`,
    );
    return response.data;
  },

  async getUltimoResultadoLotofacil(): Promise<LotofacilResponse> {
    const response = await axios.get<LotofacilResponse>(
      `${baseUrl}/resultado/ultimo/Lotofacil`,
    );
    return response.data;
  },
};
