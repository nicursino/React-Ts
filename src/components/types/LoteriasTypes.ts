import { ReactNode } from "react";

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
    dataApuracao(dataApuracao: any): import("react").ReactNode;
    valorPremio: ReactNode;
    ganhadores: ReactNode;
    resultadoOrdenado: any;
    numero: ReactNode;
    nome: string;
    ultimosResultados: ResultadoMegaSena[];
  }
  