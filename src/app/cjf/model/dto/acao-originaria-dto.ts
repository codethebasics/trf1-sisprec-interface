import { UnidadesJudicialDTO } from "./unidade-judicial-dto"

export interface AcaoOriginariaDTO {
    sequencial?: any
    numero?: string
    ajuizamentoData?: string
    unidadesJudiciais?: UnidadesJudicialDTO[]
    unidadeJudicial?: any
  }