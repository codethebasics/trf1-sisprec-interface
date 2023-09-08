import { Unidade } from "./unidade";

export interface UnidadeGestora {
    id?: number,
    abreviatura?: String;
    codigo?: String;
    codigoAtribuicao?: String;
    codigoAtribuicaoSiafi?: String;
    descricao?: String;
    numTribunal?: number;
    sequencial?: number;
    unidade?: Unidade;
    unidadeGestora?: UnidadeGestora;
}