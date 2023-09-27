import { UnidadeJudicialWS } from "./unidade-judicial-ws";

export interface AcaoOriginariaWS {
    id?: number
    ajuizamentoData?: string;
    numero?: string;
    sequencial?: number;
    unidadeJudicial?: UnidadeJudicialWS;
    unidadesJudiciais?: UnidadeJudicialWS[];
}
