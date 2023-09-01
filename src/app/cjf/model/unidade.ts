export interface Unidade {
    abreviatura?: String;
    codigo?: String;
    nome?: String;
    sequencial?: number;
    siafiCodigo?: String;
    siopCodigo?: String;
    unidadeSuperior?: Unidade;
    utilizacaoFimData?: String;
    utilizaaoInicioData?: String;
}