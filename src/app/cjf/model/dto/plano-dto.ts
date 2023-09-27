import { UnidadeGestoraDTO } from "./unidade-gestora-dto"

export interface PlanoDTO {
    sequencial: number
    mes: number
    ano: number
    tipo: string
    unidadeGestora: UnidadeGestoraDTO
    fases: any[]
    tipoDescricao: string
    descricao: string
  }