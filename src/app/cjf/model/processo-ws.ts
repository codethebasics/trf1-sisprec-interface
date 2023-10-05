import { AcaoOriginariaWS } from "./acao-originaria-ws";
import { AssuntoWS } from "./assunto-ws";
import { BeneficiarioWS } from "./beneficiario-ws";
import { ContaBancaria } from "./conta-bancaria";
import { DespesaClassificacaoWS } from "./despesa-classificacao-ws";
import { FaseWS } from "./fase-ws";
import { MovimentoTipoWS } from "./movimento-tipo-ws";
import { PessoaWS } from "./pessoa-ws";
import { ProcessoAnteriorWS } from "./processo-anterior-ws";
import { SentencaTipoWS } from "./sentenca-tipo-ws";
import { UnidadeWS } from "./unidade-ws";
import { ValorPrecatorioWS } from "./valor-precatorio-ws";

export interface ProcessoWS {
    id?: string;
    acaoOriginaria?: AcaoOriginariaWS;
    advogados?: PessoaWS[];
    assunto: AssuntoWS;
    autuacaoData?: string;
    autuacaoOriginariaData?: string;
    beneficiarios?: BeneficiarioWS[];
    beneficiariosConta?: number;
    beneficiariosSomaValores?: number;
    bloqueio?: boolean;
    cancelamentoData?: string;
    contaBancaria?: ContaBancaria;
    dataBaseUltimoCalculo?: string;
    despesaClassificacao?: DespesaClassificacaoWS;
    exclusaoData?: string;
    fase?: FaseWS;
    gru_Numero?: string;
    inclusaoData?: string;
    mesPrevisaoPagamento?: number;
    movimentoTipo?: MovimentoTipoWS;
    nomeIndiceAdotadoAtualizacaoMonetaria?: string;
    observacao?: string;
    paragrafo20Artigo1100ConsituticaoFederal?: boolean;
    processoAjuizamentoData?: string;
    processoNumero: string;
    processoNumeroOrigem?: string;
    processosAnteriores?: ProcessoAnteriorWS;
    registroData: string;
    reinclusaoLei13463?: boolean;
    requerentes?: PessoaWS[];
    sentencaTipo?: SentencaTipoWS;
    transitoJulgadoData?: string;
    tributario?: boolean;
    unidadeCadastradora?: UnidadeWS;
    unidadeExecutada?: UnidadeWS;
    unidadeJudicialTipo?: string;
    valorOriginalUltimoCalculo?: number;
    valores?: ValorPrecatorioWS[]
}