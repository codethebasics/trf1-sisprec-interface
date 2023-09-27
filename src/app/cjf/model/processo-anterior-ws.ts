enum TipoCodigoEnum {
    ACAO_ORIGINARIA,
    REQUISITORIO
}

export class ProcessoAnteriorWS {
    numero: string;
    tipoCodigo: TipoCodigoEnum;
}