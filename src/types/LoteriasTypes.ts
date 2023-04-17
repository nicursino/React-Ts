export interface Resultado {
    tipoJogo: string;
    numeroConcurso: number;
    dataApuracao: string;
    valorAcumulado: number;
    dezenas: number[];
    cidade: string;
    localSorteio: string;
    valorEstimadoProximoConcurso: number;
  }
  
  export interface Loteria {
    nome: string;
    ultimosResultados: Resultado[];
  }
  