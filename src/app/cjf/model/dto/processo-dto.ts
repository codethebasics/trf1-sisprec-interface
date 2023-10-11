import { AcaoOriginariaDTO } from "./acao-originaria-dto"
import { AdvogadoDTO } from "./advogado-dto"
import { AssuntoDTO } from "./assunto-dto"
import { BeneficiarioDTO } from "./beneficiario-dto"
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
    acaoOriginaria?: AcaoOriginariaDTO
    advogados?: AdvogadoDTO[]
    assunto?: AssuntoDTO
    autuacaoData?: string
    autuacaoOriginariaData?: any
    beneficiarios?: BeneficiarioDTO[]
    beneficiariosConta?: any
    beneficiariosSomaValores?: any
    bloqueio?: boolean
    cancelamentoData?: string
    causaTipo?: string
    contaBancaria?: ContaBancariaDTO
    dataBaseUltimoCalculo?: any
    despesaClassificacao?: DespesaClassificacaoDTO
    exclusaoData?: any
    fase?: FaseDTO
    gruNumero?: any
    inclusaoData?: any
    mesPrevisaoPagamento?: number
    movimentoTipo?: MovimentoTipoDTO
    nomeIndiceAdotadoAtualizacaoMonetaria?: any
    observacao?: any
    paragrafo20Artigo1100ConsituticaoFederal?: boolean
    processoAjuizamentoData?: string
    processoNumero?: string
    processoNumeroOrigem?: any
    processosAnteriores?: ProcessoDTO[]
    registroData?: string
    reinclusaoLei13463?: boolean
    requerentes?: RequerenteDTO[]
    sentencaTipo?: SentencaTipoDTO
    transitoJulgadoData?: string
    tributario?: boolean
    unidadeCadastradora?: UnidadeCadastradoraDTO
    unidadeExecutada?: UnidadeExecutadaDTO
    unidadeJudicialTipo?: any
    valorOriginalUltimoCalculo?: any
    valores?: ValorDTO[]
  }