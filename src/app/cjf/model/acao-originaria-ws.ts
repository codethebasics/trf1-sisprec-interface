import { UnidadeJudicialWS } from "./unidade-judicial-ws";

export interface AcaoOriginariaWS {
    id?: number,
    ajuizamentoData?: String;
    numero?: String;
    sequencial: number;
    unidadeJudicial?: UnidadeJudicialWS;
    unidadesJudiciais?: UnidadeJudicialWS[];
}
