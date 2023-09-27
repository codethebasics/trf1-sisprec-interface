import { TipoDTO } from "./tipo-dto"

export interface ValorDTO {
    sequencial: number
    tipo: TipoDTO
    valor: number
    parcelaNumero: number
    parcelaCorrenteIndicador: boolean
    bancoNumero: number
    agenciaNumero: number
    contaCodigo: any
    registroData: string
    cancelamentoData: any
  }