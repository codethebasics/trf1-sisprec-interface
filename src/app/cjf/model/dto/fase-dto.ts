import { FaseTipoDTO } from "./fase-tipo-dto"
import { PlanoDTO } from "./plano-dto"

export interface FaseDTO {
    sequencial: number
    plano: PlanoDTO
    faseTipo: FaseTipoDTO
    unidadeGestora: any
    descricao: string
    mes: number
    ano: number
    anoExercicioOrcamentario: number
    codSufixoProcessoSiaf: any
    cancelamentoData: any
    exclusaoData: any
    fimExclusaoData: any
    registroData: string
    aberturaData: string
    fechamentoData: string
    siopWebEnvio: any
    siafExportacao: any
    consolidacoes: any
    aberta: boolean
    processosIndicadosParaPagamentoEnviarExcluir: boolean
  }