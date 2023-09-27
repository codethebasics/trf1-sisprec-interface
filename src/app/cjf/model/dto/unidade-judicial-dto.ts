import { MunicipioDTO } from "./municipio-dto"
import { UnidadeTipoDTO } from "./unidade-tipo-dto"

export interface UnidadesJudicialDTO {
    acaoOriginariaUnidadeJudicialSequencial?: any
    sequencial?: number
    codigo?: string
    descricao?: string
    utilizacaoInicioData?: any
    utilizacaoFimData?: any
    registroData?: string
    unidadeTipo?: UnidadeTipoDTO
    entrada?: any
    saida?: any
    municipio?: MunicipioDTO
  }