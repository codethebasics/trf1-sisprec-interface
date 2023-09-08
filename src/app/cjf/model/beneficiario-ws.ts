import { BeneficiarioAntecessorWS } from "./beneficiario-antecessor-ws";
import { BeneficiarioTipoWS } from "./beneficiario-tipo-ws";
import { CondicaoServidorTipoWS } from "./condicao-servidor-tipo-ws";
import { ContaBancaria } from "./conta-bancaria";
import { PessoaWS } from "./pessoa-ws";
import { IndentificacaoTipoWS } from "./indentificacao-tipo-ws";
import { MovimentoTipoWS } from "./movimento-tipo-ws";
import { UnidadeWS } from "./unidade-ws";
import { ValorBeneficiarioWS } from "./valor-beneficiario-ws";

export interface BeneficiarioWS {
    id?: number,
    advogadoCausa?: boolean;
    antecessores?: BeneficiarioAntecessorWS[];
    beneficiarioTipo?: BeneficiarioTipoWS;
    cancelamentoData?: String;
    competenciaExpedicaoAno?: number;
    condicaoServidorTipo?: CondicaoServidorTipoWS;
    contaBancaria?: ContaBancaria;
    exercicioAnteriorNumeroMeses?: number;
    exercicioCorrenteNumeroMeses?: number;
    indentificacaoTipo?: IndentificacaoTipoWS;
    intimacaoData?: String;
    isentoIRRF?: boolean;
    movimentoTipo?: MovimentoTipoWS;
    nascimentoData?: String;
    pessoa?: PessoaWS;
    portadorDeficiencia?: boolean;
    portadorDoencaGrave?: boolean;
    registroData?: String;
    sequencial?: number;
    unidade?: UnidadeWS;
    valores?: ValorBeneficiarioWS[];
}