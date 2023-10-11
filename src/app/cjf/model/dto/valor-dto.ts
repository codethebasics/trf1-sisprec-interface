import { TipoDTO } from "./tipo-dto"

export interface ValorDTO {
    agenciaNumero?: number;
    bancoNumero?: number;
    beneficiarioSequencial?: number;
    debitoIdentificacao?: string;
    documentoTipo?: any;
    eventoData?: string;
    ordemPagamento107ATipo?: string;
    parcelaNumero?: number;
    receitaCodigo: string;
    sequencial?: number;
    contaCodigo?: any;
    tipo?: TipoDTO;
    valor?: number;
    parcelaCorrenteIndicador?: boolean;
    registroData?: string;
    cancelamentoData?: any;
  }