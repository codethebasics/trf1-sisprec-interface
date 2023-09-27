import { UnidadeSuperiorDTO } from "./unidade-superior"

export interface UnidadeExecutadaDTO {
    sequencial?: number
    codigo?: string
    nome?: string
    abreviatura?: string
    utilizacaoInicioData?: any
    utilizacaoFimData?: any
    unidadeSuperior?: UnidadeSuperiorDTO
  }