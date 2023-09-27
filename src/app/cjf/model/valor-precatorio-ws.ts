import { ValorTipoWS } from "./valor-tipo-ws";

export class ValorPrecatorioWS {
    id?: number;
    agenciaNumero: number;
    bancoNumero: number;
    cancelamentoData: string;
    contaCodigo: string;
    parcelaCorrenteIndicador: boolean;
    parcelaNumero: number;
    registroData: string;
    sequencial: number;
    tipo: ValorTipoWS;
}