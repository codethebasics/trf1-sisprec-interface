import { UnidadeSuperiorDTO } from "./unidade-superior"

export interface UnidadeCadastradoraDTO {
    sequencial: number
    codigo: string
    nome: any
    abreviatura: any
    utilizacaoInicioData: any
    utilizacaoFimData: any
    unidadeSuperior: UnidadeSuperiorDTO
  }