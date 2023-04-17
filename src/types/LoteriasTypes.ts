export interface ResultadoMegaSena {
    tipoJogo: string;
    numeroConcurso: number;
    dataApuracao: string;
    valorAcumulado: number;
    dezenas: number[];
    cidade: string;
    localSorteio: string;
    valorEstimadoProximoConcurso: number;
  }
  
  export interface ResultadoLotoFacil {
    nome: string;
    ultimosResultados: ResultadoMegaSena[];
  }
  