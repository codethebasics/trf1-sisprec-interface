import { ConsolidacaoTipo } from "./consolidacao-tipo";

export interface Consolidacao {
    conta?: number;
    faseSequencial?: number;
    ordem?: number;
    parcela?:number;
    registroData?: String;
    sequencial?: number;
    soma?: number;
    consolidacaoTipo?: ConsolidacaoTipo;
}