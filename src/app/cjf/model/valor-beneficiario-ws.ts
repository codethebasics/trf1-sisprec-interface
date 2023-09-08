import { OrdemPagamento107ATipoWS } from "./ordem-pagamento-107a-tipo-ws";
import { ValorTipoWS } from "./valor-tipo-ws";

export interface ValorBeneficiarioWS {
    id?: number,
    agenciaNumero?: number;
    bancoNumero?: number;
    beneficiarioSequencial?: number;
    contaCodigo?: String;
    debitoIndentificacao?: String;
    documentoTipo?: number;
    eventoData?: String;
    ordemPagamento107ATipo?: OrdemPagamento107ATipoWS;
    parcelaNumero?: number;
    receitaCodigo?: String;
    sequencial?: number;
    tipo?: ValorTipoWS;
    valor?: number;
}