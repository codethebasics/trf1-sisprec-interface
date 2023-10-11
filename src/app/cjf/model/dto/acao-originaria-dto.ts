import { UnidadeJudicialDTO } from "./unidade-judicial-dto"

export interface AcaoOriginariaDTO {
    sequencial?: any
    numero?: string
    ajuizamentoData?: string
    unidadesJudiciais?: UnidadeJudicialDTO[]
    unidadeJudicial?: UnidadeJudicialDTO
  }