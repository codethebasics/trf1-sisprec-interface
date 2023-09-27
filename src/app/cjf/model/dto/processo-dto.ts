import { AcaoOriginariaDTO } from "./acao-originaria-dto"
import { AdvogadoDTO } from "./advogado-dto"
import { AssuntoDTO } from "./assunto-dto"
import { BeneficiarioTipoDTO } from "./beneficiario-tipo-dto"
import { ContaBancariaDTO } from "./conta-bancaria-dto"
import { DespesaClassificacaoDTO } from "./despesa-classificacao-dto"
import { FaseDTO } from "./fase-dto"
import { MovimentoTipoDTO } from "./movimento-tipo-dto"
import { RequerenteDTO } from "./requrente-dto"
import { SentencaTipoDTO } from "./sentenca-tipo-dto"
import { UnidadeCadastradoraDTO } from "./unidade-cadastradora-dto"
import { UnidadeExecutadaDTO } from "./unidade-executada-dto"
import { ValorDTO } from "./valor-dto"

export interface ProcessoDTO {
    sequencial?: number
    precatorioAnteriorSequencial?: any
    processoNumero?: string
    processoNumeroOrigem?: any
    autuacaoData?: string
    transitoJulgadoData?: string
    bloqueio?: boolean
    inclusaoData?: any
    exclusaoData?: any
    registroData?: string
    cancelamentoData?: string
    processoAjuizamentoData?: string
    mesPrevisaoPagamento?: number
    tributario?: boolean
    paragrafo20Artigo1100ConsituticaoFederal?: boolean
    reinclusaoLei13463?: boolean
    autuacaoOriginariaData?: any
    gru_Numero?: any
    assunto?: AssuntoDTO
    unidadeExecutada?: UnidadeExecutadaDTO
    unidadeCadastradora?: UnidadeCadastradoraDTO
    sentencaTipo?: SentencaTipoDTO
    unidadeJudicialTipo?: any
    contaBancaria?: ContaBancariaDTO
    movimentoTipo?: MovimentoTipoDTO
    despesaClassificacao?: DespesaClassificacaoDTO
    valores?: ValorDTO[]
    advogados?: AdvogadoDTO[]
    requerentes?: RequerenteDTO[]
    beneficiarios?: BeneficiarioTipoDTO[]
    processosAnteriores?: any[]
    acaoOriginaria?: AcaoOriginariaDTO
    fase?: FaseDTO
    dataBaseUltimoCalculo?: any
    valorOriginalUltimoCalculo?: any
    nomeIndiceAdotadoAtualizacaoMonetaria?: any
    observacao?: any
    causaTipo?: string
    beneficiariosSomaValores?: any
    beneficiariosConta?: any
  }