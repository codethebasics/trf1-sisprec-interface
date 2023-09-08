import { ConsolidacaoTipo } from "./consolidacao-tipo";

export interface Consolidacao {
    id?: number,
    conta?: number;
    faseSequencial?: number;
    ordem?: number;
    parcela?:number;
    registroData?: String;
    sequencial?: number;
    soma?: number;
    consolidacaoTipo?: ConsolidacaoTipo;
}