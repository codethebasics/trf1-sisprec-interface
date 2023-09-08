import { UnidadeGestora } from "./unidade-gestora";

export interface Plano {
    id?: number,
    ano?: number;
    descricao?: String;
    fases?: String;
    mes?: number;
    precatorio?: boolean;
    rps?: boolean;
    rpv?: boolean;
    sequencial?: number;
    tipo?: String;
    tipoDescricao?: String;
    unidadeGestora?: UnidadeGestora;
}