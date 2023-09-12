import { Consolidacao } from "./consolidacao";
import { FaseTipo } from "./fase-tipo";
import { Plano } from "./plano";
import { UnidadeGestora } from "./unidade-gestora";

export interface FaseWS {
    id?: number,
    aberta?: boolean;
    aberturaData?: Date;
    ano?: number;
    anoExercicioOrcamentario?: number;
    cancelamentoData?: String;
    codSufixoProcessoSiaf?: String;
    consolidacoes?: Consolidacao[];
    descricao?: String;
    exclusaoData?: String;
    faseTipo?: FaseTipo;
    fechamentoData?: String;
    fimExclusaoData?: String;
    mes?: number;
    plano?: Plano;
    processosIndicadosParaPagamentoEnviarExcluir?: boolean;
    registroData?: String;
    sequencial?: number;
    siafExportacao?: String;
    siopWebEnvio?: String;
    unidadeGestora?: UnidadeGestora;
}