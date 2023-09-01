import { UnidadeSuperiorWS } from "./unidade-superior-ws";

export interface UnidadeWS {
    sequencial?: number;
    codigo?: String;
    nome?: String;
    abreviatura?: String;
    utilizacaoInicioData?: String;
    utilizacaoFimData?: String;
    unidadeSuperior?: UnidadeSuperiorWS;
}